import ArabianCalendar from "./ArabianCalendar";
import Scheduler from "./Scheduler";

export default class Scheduler2 extends Scheduler {
  protected createCalendar = () => {
    return new ArabianCalendar();
  };
}
