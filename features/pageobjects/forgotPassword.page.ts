export class ForgotPasswordPage {
    public get inputEmail() {
        return $("#email");
    }

    public get btnRetrievePassword() {
        return $("#form_submit > i");
    }

    public async setValue(email: string) {
        await this.inputEmail.setValue(email);
        await this.btnRetrievePassword.click();
    }

    public get checkValue() {
        return $("body > h1");
    }

    public async open(str: string) {
        return await browser.url(str);
    }
}
