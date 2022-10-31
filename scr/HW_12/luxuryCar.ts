import { CarConst } from "./parentСlass";

class NewLuxuryCar extends CarConst {
    constructor(public carBrand: string, public engineType: string, private MaxSpeed: number, private carCost: number) {
        super(carBrand, engineType);
    }
    getLuxuryCarInfo() {
        return `This is ${this.carBrand}. It has ${this.engineType} engine and max speed equal to ${this.MaxSpeed} km/h.
 Approximetly cost of the car is ${this.carCost} $`;
    }
    getLuxuryCarError() {
        if (this.carCost < 100000) {
            throw new Error(`This car is very cheap. Please check another Car`);
        } else {
            return "good Car";
        }
    }
}

const RollsRoyce = new NewLuxuryCar("Rolls-Royce Ghost", "gasoline", 249, 5000);
console.log(RollsRoyce.getLuxuryCarInfo(), ":", RollsRoyce.getLuxuryCarError());
