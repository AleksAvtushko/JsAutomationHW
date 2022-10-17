/* #### Task 3 💻

Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль.
В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах.
К примеру `This car has 3 doors and this is left-hand drive car` */

const SportCar1 = {
    numberOfDoors: 5,
    rudderPosition: "steering wheel on the right side",
};

const SportCar2 = {
    numberOfDoors: 2,
    rudderPosition: "rudder centered",
};

const SportCar3 = {
    numberOfDoors: 3,
    rudderPosition: "steering wheel on the left side",
};

function functionCar(this: any, carName: string) {
    console.log(`${carName}: This car has ${this.numberOfDoors} doors and this is ${this.rudderPosition} drive car`);
}

functionCar.call(SportCar1, "Mazda");
functionCar.call(SportCar2, "Toy Mersedes");
functionCar.apply(SportCar3, ["Alfa Romeo"]);
