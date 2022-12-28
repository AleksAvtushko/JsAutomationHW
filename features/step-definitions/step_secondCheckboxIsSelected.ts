import { Given, When, Then } from "@wdio/cucumber-framework";
import { CheckBox } from "../pageobjects/checkbox.page";

const checkBox: any = new CheckBox();

Given(/^I open checkbox page second$/, async () => {
    await browser.pause(2000);
    await checkBox.open("https://the-internet.herokuapp.com/checkboxes");
});
When(/^I find the second CheckBox$/, async () => {
    return checkBox.findCheckBox2;
});

Then(/^I should see a second checkbox is checked$/, async () => {
    await expect(checkBox.findCheckBox2).toBeChecked();
});
