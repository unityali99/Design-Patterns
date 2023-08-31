import AES from "./classes/AES";
import ChatClient from "./classes/ChatClient";

const chatClient = new ChatClient(new AES());

chatClient.send("This is a message");
