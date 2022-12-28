import { Given, When, Then } from "@wdio/cucumber-framework";
import { Dropdown } from "../pageobjects/dropdown.page";

const dropDowon: any = new Dropdown();

Given(/^I open Dropdown page first$/, async () => {
    await browser.pause(2000);
    await dropDowon.open("https://the-internet.herokuapp.com/dropdown");
});
When(/^I click to dropdown$/, async () => {
    await dropDowon.openDropdownValue1();
});

Then(/^I can select option 1 (.*)$/, async (message) => {
    await expect(dropDowon.dropDownValue).toBeExisting();
    await expect(dropDowon.dropDownValue).toHaveTextContaining(message);
});
