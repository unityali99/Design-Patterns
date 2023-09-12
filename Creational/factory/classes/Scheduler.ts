import Calendar from "../interfaces/Calendar";
import Date from "./Date";
import Event from "./Event";
import GregorianCalendar from "./GregorianCalendar";

export default class Scheduler {
  schedule = (event: Event) => {
    const today = new Date();
    const calendar = this.createCalendar();
    calendar.addEvent(event, today);
  };

  protected createCalendar = (): Calendar => {
    return new GregorianCalendar();
  };
}
