import { Given, When, Then } from "@wdio/cucumber-framework";
import { CheckBox } from "../pageobjects/checkbox.page";

const checkBox: any = new CheckBox();

Given(/^I open checkbox page$/, async () => {
    await browser.pause(1000);
    await checkBox.open("https://the-internet.herokuapp.com/checkboxes");
});
When(/^I find the first CheckBox and check$/, async () => {
    await checkBox.ClickToFirstCheckBox();
    await browser.pause(2000);
});

Then(/^I should see a first checkbox is checked$/, async () => {
    await expect(checkBox.findCheckBox1).toBeChecked();
});
