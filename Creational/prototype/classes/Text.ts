import Component from "../interfaces/Component";

export default class Text implements Component {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  get getContent() {
    return this.content;
  }

  clone = () => this;
}
