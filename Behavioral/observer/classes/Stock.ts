import Subject from "./Subject";

export default class Stock extends Subject {
  private symbol: string;
  private price: number;

  constructor(symbol: string, price: number) {
    super();
    this.symbol = symbol;
    this.price = price;
  }

  public get getSymbol(): string {
    return this.symbol;
  }

  public get getPrice(): number {
    return this.price;
  }

  public set setPrice(price: number) {
    this.price = price;
    this.notifyObservers(this);
  }
}
