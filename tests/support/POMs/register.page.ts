import {Page, Locator} from '@playwright/test';
import { testdata } from '../utils/test-data';

export class RegisterPage {
    constructor(private page: Page) {}

////// Locators /////

getFirstNameInput = () => this.page.locator('input[name="customer.firstName"]');
getLastNameInput = () => this.page.locator('input[name="customer.lastName"]');
getAddressInput = () => this.page.locator('input[name="customer.address.street"]')
getCityInput = () => this.page.locator('input[name="customer.address.city"]');
getStateInput = () => this.page.locator('input[name="customer.address.state"]');
getZipCodeInput = () => this.page.locator('input[name="customer.address.zipCode"]');
getPhoneInput = () => this.page.locator('input[name="customer.phoneNumber"]');
getSsnInput = () => this.page.locator('input[name="customer.ssn"]');
getUsernameInput = () => this.page.locator('input[name="customer.username"]');
getPasswordInput = () => this.page.locator('input[name="customer.password"]');
getConfirmPasswordInput = () => this.page.locator('input[name="repeatedPassword"]');
getRegisterButton = () => this.page.locator('input[value="Register"]');
getLogoutButton = () => this.page.locator('a[href="logout.htm"]');





//////actions //////

public async registerUser() {
    await this.getFirstNameInput().fill(testdata.auth.register.firstName);
    await this.getLastNameInput().fill(testdata.auth.register.lastName);
    await this.getAddressInput().fill(testdata.auth.register.address);
    await this.getCityInput().fill(testdata.auth.register.city);
    await this.getStateInput().fill(testdata.auth.register.state);
    await this.getZipCodeInput().fill(testdata.auth.register.zipCode);
    await this.getPhoneInput().fill(testdata.auth.register.phone);
    await this.getSsnInput().fill(testdata.auth.register.ssn);
    await this.getUsernameInput().fill(testdata.auth.register.username);
    await this.getPasswordInput().fill(testdata.auth.register.password);
    await this.getConfirmPasswordInput().fill(testdata.auth.register.password);
    await this.getRegisterButton().click();


}

public async logoutUser() {
    await this.getLogoutButton().click();

}}
