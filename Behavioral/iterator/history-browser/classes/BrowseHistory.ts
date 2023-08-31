import ArrayIterator from "./ArrayIterator";

export default class BrowseHistory<T> {
  private list: T[];

  constructor(initialList?: T[]) {
    this.list = initialList ? [...initialList] : [];
  }

  push = (value: T) => this.list.push(value);

  createIterator = () => {
    return new ArrayIterator<T>(this.list);
  };
}
