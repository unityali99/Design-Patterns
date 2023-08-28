import Button from "./Button";
import CheckBox from "./CheckBox";
import TextBox from "./TextBox";
import EventHandler from "../interfaces/EventHandler";

export default class SignUpDialogBox {
  private userNameTextBox = new TextBox();
  private passwordTextBox = new TextBox();
  private termsCheckBox = new CheckBox();
  private button = new Button();

  private changed = () => {
    if (
      this.userNameTextBox.getContent &&
      this.passwordTextBox.getContent &&
      this.termsCheckBox.getIsChecked
    )
      this.button.setIsEnabled = true;
    else this.button.setIsEnabled = false;
  };

  private eventHandler = new (class {
    public handle: () => void;

    constructor(handler: () => void) {
      this.handle = handler;
    }
  })(this.changed) as EventHandler;

  constructor() {
    this.userNameTextBox.addEventHandler(this.eventHandler);

    this.passwordTextBox.addEventHandler(this.eventHandler);

    this.termsCheckBox.addEventHandler(this.eventHandler);
  }

  simulateUserInteraction = () => {
    this.userNameTextBox.setContent = "username";
    this.passwordTextBox.setContent = "password";
    this.termsCheckBox.setIsChecked = true;

    console.log(
      `username: ${this.userNameTextBox.getContent}, password: ${
        this.passwordTextBox.getContent
      }, checkBox is ${
        this.termsCheckBox.getIsChecked ? "checked" : "unchecked"
      }, submit button is ${this.button.getIsEnabled ? "enabled" : "disabled"}`
    );
  };
}
