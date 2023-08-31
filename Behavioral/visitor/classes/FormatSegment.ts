import Operation from "../interfaces/Operation";
import Segment from "../interfaces/Segment";

export default class FormatSegment implements Segment {
  execute = (operation: Operation) => {
    operation.apply(this);
  };
}
