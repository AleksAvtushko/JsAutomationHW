/* #### Task 2 💻

+ Реализуйте приложение:

    + Перейдите по ссылке `https://jsonplaceholder.typicode.com/`
    + Во вкладке `Resources` лежит ключ `/todos` - Это именно те данные которые нам нужны
    + Далее напишите две функции `getTodos` & `printTodos`
        + Функция `getTodos` делает запрос по указанному адресу и забирает данные.
        + Функция `printTodos` создает список массив объектов, объект записывает id и title объекта с делом
        + Вывести полученный результат в консоль */

import fetch from "node-fetch";

const url = "https://jsonplaceholder.typicode.com/todos";

async function getTodos() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function printTodos() {
    const response: any = await getTodos();
    for (let i = 0; i < response.length; i++) {
        delete response[i].userId;
        delete response[i].completed;
    }
    console.log(response);
}
printTodos();
