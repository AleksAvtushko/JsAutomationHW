/* #### Task 1 💻

У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.

Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс 🐒
Посты должны загружаться в определенном порядке.
Сначала 15, потом 23, потом 7 и только потом 3.
А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку.

Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.

###### Реализуйте задачу двумя способами:
- Promise chaining
- Async / await

 + Перейдите по ссылке `https://jsonplaceholder.typicode.com/`
*/
// TODO:  Async / await

import fetch from "node-fetch";

const ids = ["15", "23", "7", "3"];

async function getResponse(id: any) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
    return await response.json();
}

const result = async () => {
    for (let i = 0; i < ids.length; i++) {
        const result = await getResponse(ids[i]);
        console.log(result);
    }
};
result();

// TODO:  Promise chaining

const data = new Promise(function (resolve, reject) {
    const backandData = fetch(`https://jsonplaceholder.typicode.com/posts`);
    resolve(backandData);
});
data.then((res: any) => {
    return res.json();
})
    .then((req: any) => {
        console.log(req.find((el: any) => el.id === 15));
        return req;
    })
    .then((req: any) => {
        console.log(req.find((el: any) => el.id === 23));
        return req;
    })
    .then((req: any) => {
        console.log(req.find((el: any) => el.id === 7));
        return req;
    })
    .then((req: any) => {
        console.log(req.find((el: any) => el.id === 3));
    })
    .catch((er: any) => {
        console.log("Error", er.json());
    });
