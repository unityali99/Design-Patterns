import EventHandler from "../interfaces/EventHandler";

export default abstract class UIControl {
  private eventHandlers: EventHandler[] = [];

  addEventHandler(eventHandler: EventHandler) {
    this.eventHandlers.push(eventHandler);
  }

  protected notifyEventHandlers() {
    for (const eventHandler of this.eventHandlers) {
      eventHandler.handle();
    }
  }
}
