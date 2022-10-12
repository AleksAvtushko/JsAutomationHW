/* #### Task 2 🖥

Используя метод **`map`** создайте новый массив, на основе массива **`users`**,
в котором каждый элемент массива будет содержать строку вида:

> ['member 1: Darya', 'member 2: Masha', ... etc]

```javascript
    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
```

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.*/

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
//arrow function
const map1 = users.map((value, index) => `member ${index + 1}: ${value}`);

console.log(map1);

// function declaration
users.map(function (value: string, index) {
    console.log(`member ${index + 1}: ${value}`);
});
