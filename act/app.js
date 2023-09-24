// // console.log("Let's Start!");
// class Car{
//     private wheals: number;
//     public constructor (protected name: string, protected model: number){}
//     public get usWheals() {
//         return this.wheals;
//     }
//     public set usWheals(v : number) {
//         this.wheals = v;
//     }
//     public showCar() {
//         return `${this.model} model ${this.name}`;
//     }
// }
// class Power extends Car{
//     private wheals= 4;
//     public showDetails(){
//         return `${this.model} model ${this.name} with all ${this.wheals} in power!`;
//     }
// }
// const myCar = new Car("BMW", 2023);
// console.log (`y car is ${myCar.showCar()}!`);
class Car {
    wheals;
    name;
    model;
    constructor(name, model) {
        this.name = name;
        this.model = model;
        this.wheals = 2;
    }
    get inWheals() {
        return this.wheals;
    }
    set inWheals(v) {
        this.wheals = v;
    }
    /**
     * showCar
     */
    showCar() {
        return `My car is ${this.model} model ${this.name} with ${this.wheals} in power!`;
    }
}
const myCar = new Car("BMW", 2023);
console.log(myCar.showCar());
myCar.inWheals = 4;
console.log(myCar.showCar());
export {};
