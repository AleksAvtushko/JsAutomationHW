/* #### Task 1 💻

Создайте класс Animal, в конструктор которого передается имя,
и с помощью метода данного класса можно вывести фразу `This is a <animalType>. It's name is <name>`.
Так же данный класс должен иметь статическое поле animalType,
 значение которого должно подставляться в фразу, которую выводит метод выше. */

class Animal {
    static animalType: string = "canine family";

    name: string;

    constructor(name: string) {
        this.name = name;
    }
    showAnimal() {
        return `This is a ${Animal.animalType}. It's name is ${this.name}`;
    }
}

const fox = new Animal("Fox");

const jackal = new Animal("jackal");

console.log(fox.showAnimal(), "|||", jackal.showAnimal());
