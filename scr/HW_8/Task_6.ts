/* #### Task 6 🖥

Используя метод **`some`** проверьте то, в массиве есть элемент кратный 3 и 5.

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
Реализуйте оба варианта, когда результирущее значение true или false */

const divisibleElement = [15, 9, 24];

const arrowFunction1 = divisibleElement.some((value: number) => value % 3 === 0 && value % 5 === 0);

console.log(arrowFunction1);

const divisibleElement1 = [5, 9, 24];

const functionDeclaration1 = divisibleElement1.some(function (value: number) {
    return value % 3 === 0 && value % 5 === 0;
});

console.log(functionDeclaration1);
