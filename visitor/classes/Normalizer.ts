import Operation from "../interfaces/Operation";
import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";

export default class Normalizer implements Operation {
  apply = (segment: FormatSegment | FactSegment) => {
    if (segment instanceof FormatSegment)
      console.log("Normalizing => (format-segment)");
    else if (segment instanceof FactSegment)
      console.log("Normalizing => (fact-segment)");
  };
}
