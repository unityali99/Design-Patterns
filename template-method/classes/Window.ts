import MemoryManager from "./MemoryManager";

export default abstract class Window {
  private memoryManager: MemoryManager;

  constructor(memoryManager: MemoryManager) {
    this.memoryManager = memoryManager;
  }

  openWindow = () => {
    this.memoryManager.initialize();
    this.open();
  };

  closeWindow = () => {
    this.memoryManager.clean();
    this.close();
  };

  protected abstract open: () => void;
  protected abstract close: () => void;
}
