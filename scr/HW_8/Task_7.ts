/* #### Task 7 🖥

Используя метод **`every`** проверьте то, в массиве сумма цифр квадратов значений четная.

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
Реализуйте оба варианта, когда результирущее значение true или false*/

const sumOfDigitsSquares = [11, 11, 2];

const sum1 = sumOfDigitsSquares.every(() => {
    let sum = 0;
    for (let i = 0; i < sumOfDigitsSquares.length; i++) {
        sum += Number(sumOfDigitsSquares[i]);
    }

    return Math.pow(sum, 2) % 2 === 0;
});
console.log(sum1);
