import {Page, Locator} from '@playwright/test';
import { BasePage } from './base-page';

export class ProductFilteringPage extends BasePage {

    readonly productItems: Locator;
    readonly sortByDropdown: Locator;
    readonly categoryFilter: Locator;
    readonly manufacturerFilter: Locator;
    readonly priceRangeFrom: Locator;
    readonly priceRangeTo: Locator;
    readonly productTitle: Locator;
    readonly productPrice: Locator;
    


    constructor(page: Page) {
    
    super(page);
    this.productItems = page.locator('.product-item');
    this.sortByDropdown = page.locator('#products-orderby');
    this.categoryFilter = page.locator('.category-navigation');
    this.manufacturerFilter = page.locator('.manufacturer-navigation');
    this.priceRangeFrom = page.locator('.price-range-from');
    this.priceRangeTo = page.locator('.price-range-to');
    this.productTitle = page.locator('.page-title a');
    this.productPrice = page.locator('.actual-price');

    }

async sortProducts(sortOption: string): Promise<void> {

    await this.selectDropdown(this.sortByDropdown, sortOption);

};

async filterByCategory(category:string): Promise<void> {
    const categoryLink = this.page.locator(`a:has-text("${category}")`).first();
    await this.clickElement(categoryLink);

};

async filterByManufacturer(manufacturer: string): Promise<void> {
    await this.selectDropdown(this.manufacturerFilter, manufacturer);
};

async filterByPriceRange(minPrice:number, maxPrice:number): Promise<void> {
    await this.takeInput(this.priceRangeFrom, minPrice.toString());
    await this.takeInput(this.priceRangeTo, maxPrice.toString());
    await this.page.keyboard.press('Enter');

}



}