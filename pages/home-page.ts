import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

// Represents the nopcommerce Home Page

export class HomePage extends BasePage {
    readonly registerLink: Locator;
    readonly loginLink:Locator;
    readonly searchBox: Locator;
    readonly searchBtn:Locator;
    readonly shoppingCartLink: Locator;
    readonly accountLink: Locator;


constructor (page:Page) {
    super(page);
    this.registerLink = page.locator('a.ico-register');
    this.loginLink = page.locator('a.ico-login');
    this.searchBox = page.locator('#small-searchterms');
    this.searchBtn = page.locator('button[type="submit"].search-box-button');
    this.shoppingCartLink =  page.locator('a.ico-cart');
    this.accountLink = page.locator('a.ico-account');

}

async waitForPageReady(): Promise<void> {
await this.page.waitForLoadState('domcontentloaded');
}

async navigateToRegister(): Promise<void> {
const currentUrl = this.page.url();
await this.registerLink.click({ timeout: 10000 });
await this.page.waitForURL(url => url.href !== currentUrl, {
        timeout: 10000
    });
}

async navigateToLogin(): Promise<void> {
     await this.loginLink.click({ timeout: 10000 });
}

async searchProduct(searchTerm: string): Promise<void> {
   await this.searchBox.fill(searchTerm);
        await this.searchBtn.click();

}

async navigateToCart(): Promise<void> {
    await this.clickElement(this.shoppingCartLink);
}

async isLoggedIn(): Promise<boolean> {
    return await this.accountLink.isVisible();
}
}