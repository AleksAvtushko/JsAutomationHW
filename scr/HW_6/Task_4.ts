/* #### Task 4 🖥

Дан обьект:

```javascript
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
```

Вывести в консоль слово красный и синий*/

const colors: any = {
    "ru pum pu ru rum": {
        red: "красный",
        green: "зеленый",
        blue: "синий",
    },
};

const myObj3 = colors["ru pum pu ru rum"];
delete myObj3.green;
console.log(myObj3);
