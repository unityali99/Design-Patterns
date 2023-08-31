import Explorer from "./classes/Explorer";
import MemoryManager from "./classes/MemoryManager";

const explorer = new Explorer(new MemoryManager());

explorer.openWindow();
explorer.closeWindow();
