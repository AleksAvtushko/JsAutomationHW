/* #### Task 1 💻

Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar.
Конструкт родительского класса принимает переменные марку авто и тип двигателя.
Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто.
Выводящий текст должен быть таким:
 `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>. Approximetly cost of the car is <carCost>`.
(В задании используйте не только public модификатор, где это возможно) */

class Car {
    constructor(protected carBrand: string, public engineType: string) {}
}

class SportCar extends Car {
    constructor(
        protected carBrand: string,
        public engineType: string,
        private MaxSpeed: number,
        private carCost: number,
    ) {
        super(carBrand, engineType);
    }
    getSportCarInfo() {
        return `This is ${this.carBrand}. It has ${this.engineType} engine and max speed equal to ${this.MaxSpeed} km/h.
 Approximetly cost of the car is ${this.carCost} $`;
    }
}

class LuxuryCar extends Car {
    constructor(public carBrand: string, public engineType: string, private MaxSpeed: number, private carCost: number) {
        super(carBrand, engineType);
    }
    getLuxuryCarInfo() {
        return `This is ${this.carBrand}. It has ${this.engineType} engine and max speed equal to ${this.MaxSpeed} km/h.
 Approximetly cost of the car is ${this.carCost} $`;
    }
}

const Mazda = new SportCar("Mazda MX-5 Miata", "gasoline", 230, 27650);
console.log(Mazda.getSportCarInfo());

const RollsRoyce = new LuxuryCar("Rolls-Royce Ghost", "gasoline", 249, 343000);
console.log(RollsRoyce.getLuxuryCarInfo());
