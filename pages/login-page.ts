import {Page, Locator} from '@playwright/test';
import {BasePage} from '../pages/base-page';
import { UserCredentials} from '../configuration/test-data.types';

export class LoginPage extends BasePage {
     readonly emailBox: Locator;
     readonly passwordBox: Locator;
     readonly loginBtn: Locator;
     readonly errorMessage: Locator;
     readonly myAccountLink: Locator;


     constructor(page: Page) {
        super(page);
        this.emailBox = page.locator('#Email');
        this.passwordBox = page.locator('#Password');
        this.loginBtn = page.locator('button.login-button');
        this.errorMessage = page.locator('.message-error');
        this.myAccountLink = page.locator('a.ico-account');

     }

     async login(credentials: UserCredentials): Promise<void> {
        await this.takeInput(this.emailBox,credentials.email);
        await this.takeInput(this.passwordBox,credentials.password);
        await this.clickElement(this.loginBtn);

     }
     async getErrorMessage(): Promise<string> {
        await this.waitForElement(this.errorMessage);
        return await this.getElementText(this.errorMessage);
     }

     async isLoginSuccesful(): Promise<boolean> {
        return await this.myAccountLink.isVisible();
     }

}