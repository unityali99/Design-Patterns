import Operation from "../interfaces/Operation";
import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";

export default class NoiseReducer implements Operation {
  apply = (segment: FormatSegment | FactSegment) => {
    if (segment instanceof FormatSegment)
      console.log("Reducing noise => (format-segment)");
    else if (segment instanceof FactSegment)
      console.log("Reducing noise => (fact-segment)");
  };
}
