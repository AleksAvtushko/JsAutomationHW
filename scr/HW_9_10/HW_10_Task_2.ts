/* #### Task 2 💻

Создайте два объекта людей. Реализуйте метод, который выводит строку `My name is <name>`.
И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя */

const factoryWorker = {
    NameOfTheFactory: "MTZ",
    position: "Engine assembler",
    Name: "Kalyan",
};

const factoryWorker2 = {
    NameOfTheFactory: "MTZ",
    position: "assembly plant manager",
    Name: "Valeriy Viktorovich",
};

function functionNAme(this: any) {
    console.log(`My name is ${this.Name}, I'm working on ${this.NameOfTheFactory}, I'm ${this.position}`);
}

functionNAme.call(factoryWorker);
functionNAme.call(factoryWorker2);
