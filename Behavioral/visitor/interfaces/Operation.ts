import FactSegment from "../classes/FactSegment";
import FormatSegment from "../classes/FormatSegment";

export default interface Operation {
  apply: (segment: FormatSegment | FactSegment) => void;
}
