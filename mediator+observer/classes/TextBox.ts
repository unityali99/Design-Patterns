import UIControl from "./UIControl";

export default class TextBox extends UIControl {
  private content: string = "";

  public get getContent(): string {
    return this.content;
  }

  public set setContent(content: string) {
    this.content = content;
    this.notifyEventHandlers();
  }
}
