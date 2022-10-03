/*#### Task 1 💻

Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.

> Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)*/

function getSum(a: number) {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum += i;
    }
    return sum;
}

let sum = getSum(100);
console.log(sum);
