/*#### Task 1 💻

Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.*/

const newObj: any = {
    name: "Aleks",
    age: 29,
};

delete newObj.name;
delete newObj.age;

console.log(newObj);
