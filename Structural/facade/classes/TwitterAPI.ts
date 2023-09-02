import OAuth from "./OAuth";
import TwitterClient from "./TwitterClient";

export default class TwitterAPI {
  private twitterClient = new TwitterClient();

  private authenticate = () => {
    const oauth = new OAuth();
    const requestToken = oauth.requestToken("appKey", "secret");
    return oauth.getAccessToken(requestToken);
  };

  public getRecentTweets = () => {
    const accessToken = this.authenticate();
    return this.twitterClient.getRecentTweets(accessToken);
  };
}
