import Operation from "../interfaces/Operation";
import Segment from "../interfaces/Segment";

export default class FactSegment implements Segment {
  execute = (operation: Operation) => {
    operation.apply(this);
  };
}
