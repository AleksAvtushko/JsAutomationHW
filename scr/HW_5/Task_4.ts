/*#### Task 4 💻

Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.

> Для 2021 это будет 5.*/

function getSumNumbers(a: number) {
    let sum = 0;
    let b = String(a);
    for (let i = 0; i < b.length; i++) {
        sum += Number(b[i]);
    }
    return sum;
}

console.log(getSumNumbers(2021));
