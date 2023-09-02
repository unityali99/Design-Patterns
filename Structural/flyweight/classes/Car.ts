export default class Car {
  private color: string;

  constructor(color: string) {
    this.color = color;
  }

  get getColor() {
    return this.color;
  }
}
