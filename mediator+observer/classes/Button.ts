import UIControl from "./UIControl";

export default class Button extends UIControl {
  private isEnabled: boolean = false;

  public get getIsEnabled(): boolean {
    return this.isEnabled;
  }

  public set setIsEnabled(enabled: boolean) {
    this.isEnabled = enabled;
    this.notifyEventHandlers();
  }
}
