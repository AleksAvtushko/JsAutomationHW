/* #### Task 3 🖥

Дан массив:

```javascript
    const numbers = [5, 43, 63, 23, 90]
```

Удалите все элементы в массиве и выведите в консоль полученный результат. */

const numbers = [5, 43, 63, 23, 90];

while (numbers.length) {
    numbers.pop();
}

console.log(numbers);
