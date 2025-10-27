import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';
import { RegistrationData } from '../configuration/test-data.types';

// represents the register page

export class RegistrationPage extends BasePage {
     readonly firstnameBox: Locator;
     readonly lastnameBox: Locator;
     readonly emailBox: Locator;
     readonly passwordBox: Locator;
     readonly confirmpasswordBox: Locator;
     readonly registerBtn: Locator;
     readonly successMessage: Locator;
     readonly continueBtn: Locator;

constructor (page:Page) {
    super(page);
    this.firstnameBox = page.locator('#FirstName');
    this.lastnameBox = page.locator('#LastName');
    this.emailBox = page.locator('#Email');
    this.passwordBox = page.locator('#Password');
    this.confirmpasswordBox = page.locator('#ConfirmPassword');
    this.registerBtn = page.locator('#register-button');
    this.successMessage = page.locator('.result');
    this.continueBtn =page.locator(' .button-1.register-continue-button');
}

async waitForRegistrationForm(): Promise<void> {
    
    await this.page.waitForURL('https://webapp-xgczr7dk5pfqs.azurewebsites.net/register', { timeout:10000});
    await this.firstnameBox.waitFor({timeout: 10000});
}
async registerUser(userData: RegistrationData): Promise<void> {
  
   await this.page.waitForSelector('#FirstName', {state: 'visible'});
   await this.page.waitForLoadState('networkidle');
   await this.firstnameBox.fill(userData.firstName);
   await this.lastnameBox.fill(userData.lastName);
   await this.emailBox.fill(userData.email);
   await this.passwordBox.fill(userData.password);
   await this.confirmpasswordBox.fill(userData.confirmPassword);
   await this.clickElement(this.registerBtn);
}

async getSuccessMessage(): Promise<string> {
    
    await this.waitForElement(this.successMessage);
    return await this.getElementText(this.successMessage);
}

async clickContinue(): Promise<void> {
   
    await this.clickElement(this.continueBtn);
}

}