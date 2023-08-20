import Iterator from "../interfaces/Iterator";

export default class ArrayIterator<T> implements Iterator<T> {
  private list: T[];
  private index: number = 0;

  constructor(list: T[]) {
    this.list = list;
  }

  hasNext = () => this.index < this.list.length;

  next = () => {
    this.index++;
  };

  current = () => this.list[this.index];
}
