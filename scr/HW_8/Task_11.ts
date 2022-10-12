/* #### Task 11 🖥

Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
Запишите соответствующие значения в переменные name, surname и age.
Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию:
{name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.  */

const newObj2 = { name: "Петр", age: "20 лет" };

let name2 = "";
let surname2 = "";
let age2 = "";

const Human = (newObj2: any) => {
    if ("name" in newObj2) {
        name2 = newObj2.name;
    } else {
        name2 = "Аноним";
    }
    if ("surname" in newObj2) {
        surname2 = newObj2.surname;
    } else {
        surname2 = "Анонимович";
    }
    if ("age" in newObj2) {
        age2 = newObj2.age;
    } else {
        age2 = "? лет";
    }
    console.log(name2, surname2, age2);
};

Human(newObj2);
