/*#### Task 2 💻

Напишите функцию которая в качестве аргумента принимает в себя сумму кредита
который хочет получить клиент и верните результат переплаты по кредиту:

  + процентная ставка в год — 17%,
  + количество лет — 5.

> Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.*/

function creditSum(a: number) {
    const interestRatePerYear = 0.17;
    const numberOfYears = 5;
    return a * interestRatePerYear * numberOfYears;
}

const result = creditSum(100);
console.log(result);
