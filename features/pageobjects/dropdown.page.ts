export class Dropdown {
    public get dropDown() {
        return $("#dropdown > option:nth-child(2)");
    }

    public async openDropdownValue1() {
        await this.dropDown.click();
    }

    public get dropDownValue() {
        return $('[value="1"]');
    }

    public async open(str: string) {
        return await browser.url(str);
    }
}
