import Component from "../interfaces/Component";
import TimeLine from "./TimeLine";

export default class ContextMenu {
  private timeLine: TimeLine;

  constructor(timeLine: TimeLine) {
    this.timeLine = timeLine;
  }

  duplicate = (component: Component) => {
    const newComponent = component.clone();
    this.timeLine.add(newComponent);
  };
}
