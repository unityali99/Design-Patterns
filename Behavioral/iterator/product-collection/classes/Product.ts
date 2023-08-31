export default class Product {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  toString = () => {
    console.log(`Product ID => ${this.id}. Product Name => ${this.name}`);
  };
}
