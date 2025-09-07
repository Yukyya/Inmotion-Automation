import {test , expect} from '@playwright/test';
import { LoginPage } from '../../support/POMs/login.page';
import { RegisterPage } from '../../support/POMs/register.page';

test.describe('Register Feature', () => {
    let loginPage: LoginPage;

    test.use({ storageState: undefined });

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await page.goto('/');

    });
        
        test('User should be able to register a new account', async ({page}) => {
            const registerPage = new RegisterPage(page);
            await page.goto('/parabank/register.htm');
            await registerPage.registerUser();
            await expect(page).toHaveURL('/register.htm/');
        
        

    })
});
