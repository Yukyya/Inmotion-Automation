import {test, expect} from '@playwright/test';
import { LoginPage } from '../../support/POMs/login.page';


test.describe('Logout Feature', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await page.goto('/');
    
    });
    test('Logout Test', async ({page}) => {
        await loginPage.logoutUser();
        await expect(page).toHaveURL('/parabank/index.htm?ConnType=JDBC');
        
        
    });
    
});