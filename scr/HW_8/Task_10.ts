/* #### Task 10 🖥

Дан массив.
Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3.
Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee', а если нет второго - в переменную elem2
запишите значение 'bbb'.
Первый элемент никуда записывать не надо.

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. */

const MyMassivObj = ["Miko", "Jogo"];

let elem2 = MyMassivObj[1];
let elem3 = MyMassivObj[2];

const resetFunction = () => {
    if (MyMassivObj[1] === undefined) elem2 = "eee";

    if (MyMassivObj[2] === undefined) elem3 = "bbb";
};

resetFunction();

console.log(elem2);
console.log(elem3);
