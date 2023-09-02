import Car from "./Car";

export default class CarFactory {
  private cars: { [color: string]: Car } = {};

  getCar = (color: string) => {
    let car = this.cars[color];
    if (!car) {
      this.cars[color] = new Car(color);
      car = this.cars[color];
      console.log("Adding a car object");
    }
    return car;
  };
}
