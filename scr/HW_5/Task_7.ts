/*#### Task 7 💻

Напишите самовызыввающиеся функцию подсчет факторила числа: число должно передаваться как параметр функции*/

((factorial: number) => {
    let sum = 1;
    for (let i = 1; i <= factorial; i++) {
        sum *= i;
    }
    console.log(sum);
})(4);