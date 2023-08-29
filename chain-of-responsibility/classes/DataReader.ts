export default abstract class DataReader {
  private next: DataReader | null;

  constructor(next: DataReader | null) {
    this.next = next;
  }

  public read = (fileName: string) => {
    if (this.doRead(fileName)) return;

    if (this.next) this.next.read(fileName);
  };

  protected abstract doRead: (fileName: string) => boolean;
}
