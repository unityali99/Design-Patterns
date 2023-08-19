export default class DocumentState {
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
  get getFontSize() {
    return this.fontSize;
  }
  get getContent() {
    return this.content;
  }
}
