/* #### Task 5 🖥

Дан обьект:

```javascript
    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey: 664,
        alexandra: 199
    }
```
Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную
*/

let salaries: any = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    vlad: 664,
    alexandra: 199,
};

const allSalaries =
    salaries.andrey + salaries.sveta + salaries.anton + salaries.andrey + salaries.vlad + salaries.alexandra;

const midSalaries = allSalaries / 5;

console.log(midSalaries);
