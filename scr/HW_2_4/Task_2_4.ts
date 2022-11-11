/* #### Task 1 💻
- Реализовать класс калькулятор, который принимает имеет несколько методов (сложение, вычитание, умножение, деление, и еще любой/любые на выбор) и принимает 2 параметра: 2 цифры
- Написать 10 положительных и отрицательных тестов (методов) по вызову данных функции,
которые в зависимости от переданных аргументов и ожидаемого результата выводит либо: что "тест" прошел, либо что "тест" свалился */

class Calculator {
    constructor(protected value1: number, protected value2: number) {}

    getaddition() {
        return this.value1 + this.value2;
    }
    getsubtraction() {
        return this.value1 - this.value2;
    }

    getmultiply() {
        return this.value1 * this.value2;
    }

    getdivide() {
        return this.value1 / this.value2;
    }

    getdegree() {
        return this.value1 ** this.value2;
    }
}
const sumCalculator = new Calculator(4, 4);

console.log(sumCalculator.getaddition() === 8 ? "Test 1 passed" : "Test 1 failed");
console.log(sumCalculator.getsubtraction() === 0 ? "Test 2 passed" : "Test 2 failed");
console.log(sumCalculator.getmultiply() === 16 ? "Test 3 passed" : "Test 3 failed");
console.log(sumCalculator.getdivide() === 1 ? "Test 4 passed" : "Test 4 failed");
console.log(sumCalculator.getdegree() === 256 ? "Test 5 passed" : "Test 5 failed");
console.log(sumCalculator.getaddition() === 18 ? "Test 6 passed" : "Test 6 failed");
console.log(sumCalculator.getsubtraction() === 8 ? "Test 7 passed" : "Test 7 failed");
console.log(sumCalculator.getmultiply() === 8 ? "Test 8 passed" : "Test 8 failed");
console.log(sumCalculator.getdivide() === 8 ? "Test 9 passed" : "Test 9 failed");
console.log(sumCalculator.getaddition() === 7 ? "Test 10 passed" : "Test 10 failed");
