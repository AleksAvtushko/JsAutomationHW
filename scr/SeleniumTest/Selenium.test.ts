import { expect } from "chai";
import { Builder, WebDriver, By, WebElement } from "selenium-webdriver";
import { PageFactory } from "./FactoryPage";

describe("Automation tests", function () {
    it("Check get current url", async function () {
        const driver: WebDriver = await new Builder().forBrowser("chrome").build();
        const phonePage = PageFactory.getPage(driver, "OnlinerPage");
        await phonePage.visitPage();
        const currentUrl = await phonePage.getCurentUrlValue();
        expect(currentUrl, "heck get current url failed").to.equal("https://catalog.onliner.by/mobile");
        await phonePage.closeBrowser();
    });

    it("Check checkbox is checked", async function () {
        const driver: WebDriver = await new Builder().forBrowser("chrome").build();
        const welcomeToTheInternetPage = PageFactory.getPage(driver, "WelcomeToTheInternetPage");
        await welcomeToTheInternetPage.visitPage();
        await driver.findElement(By.css("#content > ul > li:nth-child(6) > a")).click();
        const checkbox = await driver.findElement(By.css("#checkboxes > input[type=checkbox]:nth-child(1)"));
        await checkbox.click();
        const isChecked = await checkbox.isSelected();
        await expect(isChecked, "Test checkbox is checked failed").to.equal(true);
        await welcomeToTheInternetPage.closeBrowser();
    });

    it("Check checkbox is unchecked", async function () {
        const driver: WebDriver = await new Builder().forBrowser("chrome").build();
        const welcomeToTheInternetPage = PageFactory.getPage(driver, "WelcomeToTheInternetPage");
        await welcomeToTheInternetPage.visitPage();
        await driver.findElement(By.css("#content > ul > li:nth-child(6) > a")).click();
        const checkbox = await driver.findElement(By.css("#checkboxes > input[type=checkbox]:nth-child(3)"));
        await checkbox.click();
        const isChecked = await checkbox.isSelected();
        await expect(isChecked, "Test checkbox is unchecked failed").to.equal(false);
        await welcomeToTheInternetPage.closeBrowser();
    });

    it("Check right-click menu", async function () {
        const driver: WebDriver = await new Builder().forBrowser("chrome").build();
        const welcomeToTheInternetPage = PageFactory.getPage(driver, "WelcomeToTheInternetPage");
        await welcomeToTheInternetPage.visitPage();
        await driver.findElement(By.linkText("Context Menu")).click();
        const menu = await driver
            .actions()
            .contextClick(driver.findElement(By.css("#hot-spot")))
            .perform();
    });

    it("Check drag and drop", async function () {
        const driver: WebDriver = await new Builder().forBrowser("chrome").build();
        const welcomeToTheInternetPage = PageFactory.getPage(driver, "WelcomeToTheInternetPage");
        await welcomeToTheInternetPage.visitPage();
        await driver.findElement(By.linkText("Drag and Drop")).click();
        const elementA = await driver.findElement(By.id("column-a"));
        const elementB = await driver.findElement(By.id("column-b"));
        await driver.actions().dragAndDrop(elementA, elementB).perform();
        const elAdropElB = await driver.findElement(By.css("#column-a > header")).getText();
        await expect(elAdropElB, "Test drag and drop is failed").to.equal("B");
        await welcomeToTheInternetPage.closeBrowser();
    });
});
