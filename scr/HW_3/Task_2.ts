let secPerMin: number = 60;
let minPerHours: number = 60;
let hoursPerDay: number = 24;
let daysPerYear: number = 360;
let age: number = 29;

const myAgeInSeconds = (age * daysPerYear * hoursPerDay * minPerHours * secPerMin);
console.log(myAgeInSeconds);