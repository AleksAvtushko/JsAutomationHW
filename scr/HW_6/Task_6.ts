/* #### Task 6 🖥

Создать валидатор, 2 метода: валидатор и логин.

Первый метод принимают у пользователя логин и пароль для регистрации.
Затем данные записать в обьект.

Второй метод принимает данные пользователя и объект зарегестрированного пользователя.
Если передан верный логин и пароль, вывести сообщение **Добро пожалоВать**.
 */

// Method #1

const login = "Aleksandr";
const password = "qwerty123!";

const objLogAndPass: any = {};

objLogAndPass.login = login;
objLogAndPass.password = password;

console.log(objLogAndPass);

// Method #2
const myObjForLog: any = {
    login: "Aleks",
    Password: "qwerty123!",
    myObgFunction: function (login: string, password: string) {
        if (this.login === login && this.Password === password) {
            return "Добро пожалоВать";
        } else {
            return "Incorrect login or password";
        }
    },
};
console.log(myObjForLog.myObgFunction("Aleks", "qwerty123!"));
