import {test,expect} from '../configuration/test-fixtures';
import { TestDataManager } from '../configuration/TestDataManager';

test.describe('User Registration', ()=> {
test.beforeAll(async({}) => {
    console.log('Starting User Registration tests');
});


test.beforeEach(async({homePage}) => {
    await homePage.navigateTo();
    console.log('beforeEach: Runs once before each tests in this file');
});

test.afterEach(async({}) => {
    console.log('afterEach: Runs once after each tests in this file');
});

test.afterAll(async({}) => {
    console.log('User Registration tests completed');
});


test('@fix should successfully register a new user', async ({ 
    homePage, 
    registrationPage, 
    testData 
  }) => {

    // unique email needs to be generated to avoid already exists error
    const uniqueEmail = TestDataManager.generateUniqueEmail();
    const userData = { ...testData.users.newUser, email:uniqueEmail};
    
    await homePage.navigateToRegister();
    await registrationPage.registerUser(userData);

    const successMsg = await registrationPage.getSuccessMessage();
    expect(successMsg).toContain('Your registration completed');

    await registrationPage.clickContinue();
    const isLoggedIn = await homePage.isLoggedIn();
    expect(isLoggedIn).toBeTruthy();
    
    console.log('User successfully registered ');
  });

test('@fix should not register', async({
    homePage,
    registrationPage,
    testData
}) => {
    const existingEmail = TestDataManager.getRuntimeData('registeredEmail') || testData.users.valid.email;
    const userData = { ...testData.users.newUser, email:existingEmail};

    await homePage.navigateToRegister();
    await registrationPage.registerUser(userData);

    await expect(registrationPage.page.locator('.message-error ')).toContainText(/email already exists/i);
    
})

})