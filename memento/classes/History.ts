import DocumentState from "./DocumentState";

export default class History {
  private list: DocumentState[];

  constructor(list?: DocumentState[]) {
    this.list = list ? [...list] : [];
  }

  push(state: DocumentState) {
    this.list.push(state);
  }

  pop() {
    return this.list.pop();
  }
}
