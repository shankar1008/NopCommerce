import {test,expect} from '../configuration/test-fixtures';
import { TestDataManager } from '../configuration/TestDataManager';

test.describe('User Login', ()=> {

    test.beforeAll(async({}) => {
    console.log('Starting User Login tests');
});

test.beforeEach(async({homePage}) => {
    await homePage.navigateTo();
    await homePage.navigateToLogin(); 
    console.log('starting user login tests');
})

test.afterEach(async({}) => {
    console.log('beforeAll: Runs once after each tests in this file');
})
test.afterAll(async({}) => {
    console.log('beforeAll: Runs once before all tests in this file');
});

test('@fix should successfully login with right credentials', async ({ 
    loginPage, 
    testData 
  }) => {
    // unique email needs to be generated to avoid already exists error
    const registeredEmail = TestDataManager.getRuntimeData('registeredEmail');
    const credentials = {
        email: registeredEmail || testData.users.valid.email,
        password: testData.users.newUser.password
    };
    await loginPage.login(credentials);

    const isLoggedIn = await loginPage.isLoginSuccesful();
    expect(isLoggedIn).toBeTruthy();

  });

 test('@fix should show error with wrong credentials', async ({ 
    loginPage, 
    testData 
  }) => {
   
    await loginPage.login(testData.users.invalid);
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Login was unsuccessful');


  });

})