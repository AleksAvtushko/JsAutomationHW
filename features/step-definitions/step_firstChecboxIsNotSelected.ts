import { Given, When, Then } from "@wdio/cucumber-framework";
import { CheckBox } from "../pageobjects/checkbox.page";

const checkBox: any = new CheckBox();

Given(/^I open checkbox page first$/, async () => {
    await browser.pause(2000);
    await checkBox.open("https://the-internet.herokuapp.com/checkboxes");
});
When(/^I find the first CheckBox$/, async () => {
    return checkBox.findCheckBox1;
});

Then(/^I should see a first checkbox doesn't check$/, async () => {
    await expect(checkBox.findCheckBox1).not.toBeSelected();
});
