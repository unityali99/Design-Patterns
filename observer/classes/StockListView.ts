import Observer from "../interfaces/Observer";
import Stock from "./Stock";

export default class StockListView implements Observer {
  public id = 2;
  private stocks: Stock[] = [];

  addStock(stock: Stock) {
    this.stocks.push(stock);
    stock.addObserver(this);
  }

  show() {
    this.stocks.map((stock) =>
      console.log(`Stock ${stock.getSymbol} is ${stock.getPrice} dollars`)
    );
  }

  update(stock: Stock) {
    const stockIndex = this.stocks.findIndex(
      (s) => s.getSymbol === stock.getSymbol
    );
    this.stocks[stockIndex] = stock;
    console.log("Updating stocks for stock list view");
    this.show();
  }
}
