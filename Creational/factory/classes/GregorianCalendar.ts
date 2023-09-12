import Calendar from "../interfaces/Calendar";
import Date from "./Date";
import Event from "./Event";

export default class GregorianCalendar implements Calendar {
  addEvent = (event: Event, date: Date) => {
    console.log(
      "Adding an event on the given date. (Gregorian Calendar)",
      date,
      event
    );
  };
}
