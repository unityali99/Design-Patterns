import Operation from "../interfaces/Operation";
import Segment from "../interfaces/Segment";

export default class WaveFile {
  private segments: Segment[] = [];

  addSegment = (segment: Segment) => {
    this.segments.push(segment);
  };

  executeOperation = (operation: Operation) => {
    for (const segment of this.segments) {
      operation.apply(segment);
    }
  };
}
