import { WebDriver, By } from "selenium-webdriver";

export class HomePage {
    constructor(protected driver: WebDriver) {}
    async getCurentUrlValue() {
        return this.driver.getCurrentUrl();
    }

    async findElement(str: string) {
        return this.driver.findElement(By.css(str));
    }
    async closeBrowser() {
        return this.driver.quit();
    }

    async pageScreen() {
        return this.driver.manage().window().maximize();
    }
    async getURL(str: string) {
        return this.driver.get(str);
    }
}
