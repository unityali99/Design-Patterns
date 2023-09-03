import ContextMenu from "./classes/ContextMenu";
import Text from "./classes/Text";
import TimeLine from "./classes/TimeLine";

const textComponent = new Text("content");

const timeLine = new TimeLine();
timeLine.add(textComponent);

const contextMenu = new ContextMenu(timeLine);

contextMenu.duplicate(textComponent);
