/* #### Task 1 💻
- Написать минимум 5 UI тестов для сайта: https:onliner.by. или подобных
- При написании использовать различные типы селекторов и локаторов
- Добавить методы ожидания элементов
- Добавить проверки элементов/текстовых значений */

import { Builder, WebDriver, By, WebElement } from "selenium-webdriver";

async function checkInvalidCredentialsForLogin() {
    const driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://the-internet.herokuapp.com/login");
    await driver.findElement(By.css("#username")).sendKeys("AQASroll5241");
    await driver.findElement(By.css("#password")).sendKeys("qwerty123!");
    await driver.findElement(By.css("#login > button")).click();
    if (await driver.findElement(By.css("#flash"))) {
        console.log("Test#1 pessed");
    } else {
        console.log("Test#1 failed");
    }
    await driver.quit();
}
checkInvalidCredentialsForLogin();

async function checkDropDownList() {
    const driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://the-internet.herokuapp.com/");
    await driver.findElement(By.css("#content > ul > li:nth-child(11) > a")).click();
    await driver.findElement(By.css("#dropdown")).click();
    if (
        (await driver.findElement(By.css("#dropdown > option:nth-child(2)"))) &&
        (await driver.findElement(By.css("#dropdown > option:nth-child(3)")))
    ) {
        console.log("Test#2 Pessed");
    } else {
        console.log("Test#2 failed");
    }
    await driver.quit();
}

checkDropDownList();

async function checkFloatingMenu() {
    const driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://the-internet.herokuapp.com/");
    await driver.findElement(By.css("#content > ul > li:nth-child(19) > a")).click();
    if (
        (await driver.findElement(By.css("#menu > ul > li:nth-child(1) > a"))) &&
        (await driver.findElement(By.css("#menu > ul > li:nth-child(2) > a"))) &&
        (await driver.findElement(By.css("#menu > ul > li:nth-child(3) > a"))) &&
        (await driver.findElement(By.css("#menu > ul > li:nth-child(4) > a")))
    ) {
        console.log("Test#3 Pessed");
    } else {
        console.log("Test#3 failed");
    }
    await driver.quit();
}

checkFloatingMenu();

async function checkKeyPresses() {
    const driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://the-internet.herokuapp.com/");
    await driver.findElement(By.css("#content > ul > li:nth-child(31) > a")).click();
    await driver.findElement(By.css("#target")).sendKeys("qwerty123");
    if ((await driver.findElement(By.id("result")).getText()) === "You entered: 3") {
        console.log("Test#4 Pessed");
    } else {
        console.log("Test#4 failed");
    }
    await driver.quit();
}
checkKeyPresses();

async function checkCheckbopxesIsUnchecked() {
    const driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://the-internet.herokuapp.com/");
    await driver.findElement(By.css("#content > ul > li:nth-child(6) > a")).click();
    if (
        (await driver.findElement(By.css("#checkboxes > input[type=checkbox]:nth-child(1)")).isSelected()) === false &&
        (await driver.findElement(By.xpath('//*[@id="checkboxes"]/input[2]')).isSelected()) === false
    ) {
        console.log("Test#5 Pessed");
    } else {
        console.log("Test#5 failed");
    }
    await driver.quit();
}

checkCheckbopxesIsUnchecked();
