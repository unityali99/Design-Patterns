import UIControl from "./UIControl";

export default class CheckBox extends UIControl {
  private isChecked: boolean = false;

  public get getIsChecked(): boolean {
    return this.isChecked;
  }

  public set setIsChecked(checked: boolean) {
    this.isChecked = checked;
    this.notifyEventHandlers();
  }
}
