export class CheckBox {
    public get findCheckBox1() {
        return $('[type="checkbox"]:nth-child(1)');
    }

    public async ClickToFirstCheckBox() {
        await this.findCheckBox1.click();
    }

    public get findCheckBox2() {
        return $("#checkboxes > input[type=checkbox]:nth-child(3)");
    }

    public async open(str: string) {
        return await browser.url(str);
    }
}
