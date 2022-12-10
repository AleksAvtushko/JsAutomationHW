import { OnlinerPage } from "./OnlinerPage";
import { TheInternetPage } from "./TheInternetPage";
import { WebDriver } from "selenium-webdriver";
import { HomePage } from "./HomePage";

export class PageFactory {
    static getPage(driver: WebDriver, pageName: "OnlinerPage" | "WelcomeToTheInternetPage") {
        switch (pageName) {
            case "OnlinerPage":
                return new OnlinerPage(driver);
            case "WelcomeToTheInternetPage":
                return new TheInternetPage(driver);
            default:
                return new TheInternetPage(driver);
        }
    }
}
