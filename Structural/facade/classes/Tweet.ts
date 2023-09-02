export default class Tweet {
  private tweetContent: string;

  constructor(tweetContent: string) {
    this.tweetContent = tweetContent;
  }

  public get getTweetContent() {
    return this.tweetContent;
  }
}
