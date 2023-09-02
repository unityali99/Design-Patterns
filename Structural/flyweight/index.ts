import CarFactory from "./classes/CarFactory";

const carFactory = new CarFactory();

const car = carFactory.getCar("red");
console.log(car);

const car2 = carFactory.getCar("red");
console.log(car2);

const car3 = carFactory.getCar("blue");
console.log(car3);

const car4 = carFactory.getCar("blue");
console.log(car4);
