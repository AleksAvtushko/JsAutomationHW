/*### ADVANCED level

#### Task 1 👨‍🏫

+ Реализуйте функцию, который принимает 3 целочисленных значения a, b, c.
Функция должна возвращать **true**, если треугольник можно построить со сторонами заданной длины,
и **false** в любом другом случае.*/

function triangle(a: number, b: number, c: number) {
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    } else if ((a & b) == c) {
        return true;
    } else {
        return false;
    }
}
console.log(triangle(5, 10, 9));
