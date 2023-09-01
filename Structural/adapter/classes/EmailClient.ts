import EmailProvider from "../interfaces/EmailProvier";

export default class EmailClient {
  private providers: EmailProvider[] = [];

  addProvider = (provider: EmailProvider) => {
    this.providers.push(provider);
  };

  downloadEmails = () => {
    for (const provider of this.providers) {
      provider.downloadEmails();
      console.log("-----------------------------");
    }
  };
}
