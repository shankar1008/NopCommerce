import {Page, Locator} from '@playwright/test';

export class BasePage {
    readonly page: Page;
constructor(page:Page) {
    this.page = page;
}

// navigation
async navigateTo(path: string=''): Promise<void> {
    const baseURL =process.env.BASE_URL || 'https://webapp-xgczr7dk5pfqs.azurewebsites.net';
    await this.page.goto(`${baseURL}${path}`);
}

//  wait 
async waitForElement(locator:Locator, timeout:number = 10000):Promise<void> {
    await locator.waitFor({timeout});
}

//  element interactions
async clickElement(locator:Locator, waitForNavigation:boolean = true):Promise<void> {
    if (waitForNavigation) {
        await locator.click({timeout: 10000});
    } else {
        await locator.click ({timeout: 10000, noWaitAfter: true});
    }
    
}

async takeInput(locator:Locator, text: string):Promise<void> {
    await this.waitForElement(locator);
    await locator.fill(text);
}

async isElementVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
    }

async getElementText(locator:Locator): Promise<string>{
    await this.waitForElement(locator);
    return await locator.textContent() || '';
}

async selectDropdown(locator: Locator, value: string): Promise<void> {
    await this.waitForElement(locator);
    await locator.selectOption(value);
}



}