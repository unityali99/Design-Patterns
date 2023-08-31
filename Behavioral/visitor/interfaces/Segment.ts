import Operation from "./Operation";

export default interface Segment {
  execute: (operation: Operation) => void;
}
