import Calendar from "../interfaces/Calendar";
import Date from "./Date";
import Event from "./Event";

export default class ArabianCalendar implements Calendar {
  addEvent = (event: Event, date: Date) => {
    console.log(
      "Adding an event on the given date. (Arabian Calendar)",
      date,
      event
    );
  };
}
