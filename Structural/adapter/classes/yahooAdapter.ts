import EmailProvider from "../interfaces/EmailProvier";
import YahooClient from "./Yahoo/YahooClient";

export default class YahooAdapter implements EmailProvider {
  private yahooClient: YahooClient;

  constructor(yahooClient: YahooClient) {
    this.yahooClient = yahooClient;
  }

  downloadEmails = () => {
    this.yahooClient.fetchMails();
  };
}
