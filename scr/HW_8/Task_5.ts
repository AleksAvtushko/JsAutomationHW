/*
#### Task 5 🖥

Используя метод **`find`** найдите в массиве первое четное число.

```javascript
    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
``` */

const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

const found = numbers2.find((element) => element % 2 === 0);

console.log(found);
