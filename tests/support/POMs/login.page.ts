import {Page , Locator} from '@playwright/test';
import { testdata } from '../utils/test-data';

export class LoginPage {
    constructor(private page: Page) {}




////// Locators /////


getUsernameInput = () => this.page.locator('input[name="username"]');
getpasswordInput = () => this.page.locator('input[name="password"]');
getloginButton = () => this.page.locator('input[value="Log In"]');
getlogoutButton = () => this.page.locator('a[href="logout.htm"]');


//////actions //////


public async loginUser() {
    await this.getUsernameInput().fill(testdata.auth.login.username);
    await this.getpasswordInput().fill(testdata.auth.login.password);
    await this.getloginButton().click();
}

public async logoutUser() {
    await this.getlogoutButton().click();
}


}