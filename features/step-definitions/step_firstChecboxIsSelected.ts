import { Given, When, Then } from "@wdio/cucumber-framework";
import { CheckBox } from "../pageobjects/checkbox.page";

const checkBox: any = new CheckBox();

Given(/^I open checkbox page$/, async () => {
    await browser.pause(1000);
    await checkBox.open("https://the-internet.herokuapp.com/checkboxes");
});
When(/^I find the first CheckBox and check$/, async () => {
    await checkBox.Checkbox1IsChecked;
});

Then(/^I should see a first checkbox is checked$/, async () => {
    await expect(checkBox.Checbox1IsChecked).toBeSelected();
});
