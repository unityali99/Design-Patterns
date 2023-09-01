import EmailClient from "./classes/EmailClient";
import GmailClient from "./classes/Gmail/GmailClient";
import GmailAdapter from "./classes/GmailAdapter";
import YahooClient from "./classes/Yahoo/YahooClient";
import YahooAdapter from "./classes/yahooAdapter";

const gmailClient = new GmailClient();
const gmailAdapter = new GmailAdapter(gmailClient);

const yahooClient = new YahooClient();
const yahooAdapter = new YahooAdapter(yahooClient);

const emailClient = new EmailClient();

emailClient.addProvider(gmailAdapter);
emailClient.addProvider(yahooAdapter);

emailClient.downloadEmails();
