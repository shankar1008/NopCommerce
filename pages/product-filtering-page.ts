import {Page, Locator} from '@playwright/test';
import { BasePage } from './base-page';

export class ProductFilteringPage extends BasePage {

    readonly productItems: Locator;
    readonly sortByDropdown: Locator;
    readonly categoryMenu: Locator;
    readonly manufacturerFilter: Locator;
    readonly priceRangeFrom: Locator;
    readonly priceRangeTo: Locator;
    readonly productTitle: Locator;
    


    constructor(page: Page) {
    
    super(page);
    this.productItems = page.locator('.product-item');
    this.sortByDropdown = page.locator('#products-orderby');
    this.categoryMenu = page.locator('.category-navigation');


    }

}