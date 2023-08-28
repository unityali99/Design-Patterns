import Observer from "../interfaces/Observer";
import Stock from "./Stock";

export default class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    this.observers = this.observers.filter((obs) => {
      obs.id !== observer.id;
    });
  }

  notifyObservers(stock: Stock) {
    for (const observer of this.observers) observer.update(stock);
  }
}
