/*#### Task 3 💻

Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
  + строку
  + значение от
+ значение по

После вызова функция должна вернуть переданную строку обрезанную по значениям от и по*/

function trimString(a: string, b: number, c: number) {
    return a.slice(b, c);
}

let retunr = trimString("Внутри гор только горы", 1, 7);
console.log(retunr);
