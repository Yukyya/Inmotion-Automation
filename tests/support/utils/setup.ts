import {test, expect} from "@playwright/test";
import { LoginPage } from "../POMs/login.page";


test('authenticate', async ({ page, }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/')
    await loginPage.loginUser();
    await expect(page).toHaveURL(/overview.htm/)
    await page.context().storageState({ path: 'state.json' });



});