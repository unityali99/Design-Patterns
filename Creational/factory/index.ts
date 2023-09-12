import Event from "./classes/Event";
import Scheduler from "./classes/Scheduler";
import Scheduler2 from "./classes/Scheduler2";

const scheduler1 = new Scheduler();

scheduler1.schedule(new Event());

const scheduler2 = new Scheduler2();

scheduler2.schedule(new Event());
