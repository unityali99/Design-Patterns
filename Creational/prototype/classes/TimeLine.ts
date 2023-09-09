import Component from "../interfaces/Component";

export default class TimeLine {
  private components: Component[] = [];

  add = (component: Component) => {
    this.components.push(component);
    console.log(this.components);
  };
}
