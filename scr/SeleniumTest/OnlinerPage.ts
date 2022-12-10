import { HomePage } from "./HomePage";
import { WebDriver } from "selenium-webdriver";

export class PhonePage extends HomePage {
    private readonly url: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.url = "https://catalog.onliner.by/mobile";
    }
    async visitPage() {
        await this.driver.manage().window().maximize();
        return await this.driver.get(this.url);
    }
}
