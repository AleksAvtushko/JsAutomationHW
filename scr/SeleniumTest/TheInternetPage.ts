import { HomePage } from "./HomePage";
import { WebDriver } from "selenium-webdriver";

export class TheInternetPage extends HomePage {
    private readonly url: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.url = "https://the-internet.herokuapp.com/";
    }
    async visitPage() {
        await this.driver.manage().window().maximize();
        return await this.driver.get(this.url);
    }
}
