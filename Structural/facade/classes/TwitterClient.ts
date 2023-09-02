import Tweet from "./Tweet";

export default class TwitterClient {
  private tweets = [
    new Tweet("this is a tweet"),
    new Tweet("this is a tweet2"),
    new Tweet("this is a tweet3"),
  ];

  getRecentTweets(accessToken: string) {
    console.log(
      `Getting recent tweets via the provided access token: ${accessToken}`
    );
    return this.tweets;
  }
}
