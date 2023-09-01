import EmailProvider from "../interfaces/EmailProvier";
import GmailClient from "./Gmail/GmailClient";

export default class GmailAdapter implements EmailProvider {
  private gmailClient: GmailClient;

  constructor(gmailClient: GmailClient) {
    this.gmailClient = gmailClient;
  }

  downloadEmails = () => {
    this.gmailClient.connect();
    this.gmailClient.getEmails();
    this.gmailClient.disconnect();
  };
}
