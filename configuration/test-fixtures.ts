import {test as base} from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { RegistrationPage } from '../pages/registration-page';
import { LoginPage } from '../pages/login-page';
import { TestDataManager } from '../configuration/TestDataManager';
import { TestData } from './test-data.types';


type MyFixtures = {
    homePage: HomePage;
    registrationPage: RegistrationPage;
    loginPage: LoginPage;
    testData:any;
};


export const test = base.extend<MyFixtures> ({


  homePage: async ({ page }, use) => {
    await page.goto('https://webapp-xgczr7dk5pfqs.azurewebsites.net');
    const homePage = new HomePage(page);
    await use(homePage);
  },

registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistrationPage(page);
    await use(registrationPage);
    
  }, 
  
  loginPage: async ({ page }, use) => {
       const loginPage = new LoginPage(page);
    await use(loginPage);
        
  },

  testData: async ({}, use: (arg0: TestData) => any) => {
    
    const data = TestDataManager.loadTestData();
    await use(data);
    
  },


});
export { expect } from '@playwright/test';