import MemoryManager from "./MemoryManager";
import Window from "./Window";

export default class Explorer extends Window {
  constructor(memoryManager: MemoryManager) {
    super(memoryManager);
  }

  protected open = () => {
    console.log("Opening file explorer ...");
  };
  protected close = () => {
    console.log("Closing file explorer ...");
  };
}
