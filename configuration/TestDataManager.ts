import * as fs from 'fs';
import * as path from 'path';
import { TestData } from '../configuration/test-data.types';
import { EnvironmentValues } from '../configuration/env-values';

export class TestDataManager {
  private static dataPath: string = EnvironmentValues.cfg.testDataPath;
  private static data: any;

  static loadTestData(): TestData {
    const filePath = path.resolve(this.dataPath);
    const rawData = fs.readFileSync(filePath, 'utf-8');
    this.data = JSON.parse(rawData);
    return this.data;
  }

  static saveTestData(data: any): void {
    const filePath = path.resolve(this.dataPath);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    this.data = data;
  }

  static updateRuntimeData(key: string, value: any): void {
    if (!this.data) {
      this.loadTestData();
    }
    if (!this.data.runtime) {
      this.data.runtime = {};
    }
    this.data.runtime[key] = value;
    this.saveTestData(this.data);
  }

  static getRuntimeData(key: string): any {
    if (!this.data) {
      this.loadTestData();
    }
    return this.data.runtime?.[key];
  }

  static generateUniqueEmail(): string {
    const timestamp = Date.now();
    return `testuser_${timestamp}@email.com`;
  }

  static getTestUserCredentials(): { email: string; password: string } {
    return {
      email: EnvironmentValues.cfg.testUserEmail,
      password: EnvironmentValues.cfg.testUserPassword
    };
  }
}