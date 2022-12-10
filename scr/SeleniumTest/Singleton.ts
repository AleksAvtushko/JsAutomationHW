class MySingleton {
    static instance: MySingleton;
    private numberArr: number[] = [];

    private constructor() {
        console.log("value");
    }

    public static getInstance(): MySingleton {
        if (!MySingleton.instance) {
            MySingleton.instance = new MySingleton();
        }
        return MySingleton.instance;
    }

    numberToArr(numb: number): void {
        this.numberArr.push(numb);
    }

    showNumberArr(): number[] {
        return this.numberArr;
    }
}

const obj1 = MySingleton.getInstance();
const obj2 = MySingleton.getInstance();
obj1.numberToArr(50);
obj2.numberToArr(100);
obj1.numberToArr(150);
obj2.numberToArr(200);

console.log(obj1.showNumberArr());
console.log(obj2.showNumberArr());

console.log(obj1 === obj2);
