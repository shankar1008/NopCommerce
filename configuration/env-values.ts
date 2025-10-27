import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

interface ConfigType {
  url: string;
  timeout: number;
  navigationTimeout: number;
  headless: boolean;
  browser: string;
  retries: number;
  parallelWorkers: number;
  testDataPath: string;
  testUserEmail: string;
  testUserPassword: string;
  generateReport: boolean;
  reportPath: string;
  isCI: boolean;
}

export class EnvironmentValues {
  static cfg: DeepReadonly<ConfigType> = {
    url: process.env.BASE_URL || 'https://webapp-xgczr7dk5pfqs.azurewebsites.net',
    timeout: parseInt(process.env.TIMEOUT || '30000'),
    navigationTimeout: parseInt(process.env.NAVIGATION_TIMEOUT || '30000'),
    headless: process.env.HEADLESS !== 'false',
    browser: process.env.BROWSER || 'chromium',
    retries: parseInt(process.env.RETRIES || '0'),
    parallelWorkers: parseInt(process.env.PARALLEL_WORKERS || '4'),
    testDataPath: process.env.TEST_DATA_PATH || './configuration/testData.json',
    testUserEmail: process.env.TEST_USER_EMAIL || 'test@email.com',
    testUserPassword: process.env.TEST_USER_PASSWORD || 'Test@123',
    generateReport: process.env.GENERATE_REPORT !== 'false',
    reportPath: process.env.REPORT_PATH || './test-results',
    isCI: process.env.CI === 'false',
  };

  static validate(): void {
    const required = ['BASE_URL'];
    const missing = required.filter(key => !process.env[key]);
    
    if (missing.length > 0) {
      console.warn(`⚠️  Missing environment variables: ${missing.join(', ')}`);
      console.warn('⚠️  Using default values. Please check your .env file.');
    }
  }

  static printConfig(): void {
    console.log('\n📋 Current Configuration:');
    console.log(`   BASE_URL: ${this.cfg.url}`);
    console.log(`   BROWSER: ${this.cfg.browser}`);
    console.log(`   HEADLESS: ${this.cfg.headless}`);
    console.log(`   TIMEOUT: ${this.cfg.timeout}ms`);
    console.log(`   PARALLEL_WORKERS: ${this.cfg.parallelWorkers}`);
    console.log(`   TEST_DATA_PATH: ${this.cfg.testDataPath}`);
    console.log(`   IS_CI: ${this.cfg.isCI}\n`);
  }
}

EnvironmentValues.validate();
