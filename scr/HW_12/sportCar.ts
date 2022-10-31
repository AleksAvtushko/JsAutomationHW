import { CarConst } from "./parentСlass";

class NewSportCar extends CarConst {
    constructor(public carBrand: string, public engineType: string, private MaxSpeed: number, private carCost: number) {
        super(carBrand, engineType);
    }

    getSportCarInfo() {
        return `This is ${this.carBrand}. It has ${this.engineType} engine and max speed equal to ${this.MaxSpeed} km/h.
 Approximetly cost of the car is ${this.carCost} $`;
    }

    getSportCarError() {
        if (this.MaxSpeed < 200) {
            throw new Error(`This car is very slow. Please check another Car`);
        } else {
            return "good Car";
        }
    }
}
const Mazda = new NewSportCar("Mazda MX-5 Miata", "gasoline", 230, 27650);
console.log(Mazda.getSportCarInfo(), ":", Mazda.getSportCarError());
