export default class Logger {
  private static instance: Logger = new Logger();
  private logs: string[] = [];

  private constructor() {}

  public static getInstance() {
    return this.instance;
  }

  log() {
    console.log(this.logs);
  }

  addLog(log: string) {
    this.logs.push(log);
  }
}
