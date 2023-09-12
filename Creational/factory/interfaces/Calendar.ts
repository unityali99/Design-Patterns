import Date from "../classes/Date";
import Event from "../classes/Event";

export default interface Calendar {
  addEvent: (event: Event, date: Date) => void;
}
