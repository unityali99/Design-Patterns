import DocumentState from "./DocumentState";

export default class Document {
  private content: string;
  private fontName: string;
  private fontSize: number;

  constructor(content: string, fontName: string, fontSize: number) {
    this.content = content;
    this.fontName = fontName;
    this.fontSize = fontSize;
  }

  get getFontName() {
    return this.fontName;
  }

  set setFontName(fontName: string) {
    this.fontName = fontName;
  }

  get getFontSize() {
    return this.fontSize;
  }

  set setFontSize(fontSize: number) {
    this.fontSize = fontSize;
  }

  get getContent() {
    return this.content;
  }

  set setContent(content: string) {
    this.content = content;
  }

  createState() {
    return new DocumentState(this.content, this.fontName, this.fontSize);
  }

  restore(state: DocumentState) {
    this.content = state.getContent;
    this.fontName = this.getFontName;
    this.fontSize = state.getFontSize;
  }
}
