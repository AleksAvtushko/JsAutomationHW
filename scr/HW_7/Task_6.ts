/*
#### Task 6 🖥

```javascript
    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]
```

+ Соедините два массива чисел в один.
+ В полученном массиве попробуйте найти индекс числа **`8`** */

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const newMass = evenNumbers.concat(oddNumbers);

console.log(newMass.indexOf(8));
