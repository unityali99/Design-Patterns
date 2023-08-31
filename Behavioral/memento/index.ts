import Document from "./classes/Document";
import History from "./classes/History";

const document = new Document("Test", "Tahoma", 24);
const history = new History();

document.setContent = "Test2";
document.setFontName = "Bnazanin";
document.setFontSize = 20;
history.push(document.createState());

document.setContent = "Test3";
document.setFontName = "Bzar";
document.setFontSize = 19;
history.push(document.createState());

document.setContent = "Test4";
document.setFontName = "Bzar";
document.setFontSize = 19;
document.restore(history.pop()!);

console.log(document);
