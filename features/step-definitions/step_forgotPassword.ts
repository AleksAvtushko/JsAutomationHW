import { Given, When, Then } from "@wdio/cucumber-framework";
import { ForgotPasswordPage } from "../pageobjects/forgotPassword.page";

const forgotPass: any = new ForgotPasswordPage();
Given(/^I am on the forgot password page$/, async () => {
    await forgotPass.open("https://the-internet.herokuapp.com/forgot_password");
});

When(/^I add value (.*)$/, async (email) => {
    await forgotPass.setValue(email);
});

Then(/^I go to next page and see next page (.*)$/, async (message) => {
    await expect(forgotPass.checkValue).toBeExisting();
    await expect(forgotPass.checkValue).toHaveTextContaining(message);
});
