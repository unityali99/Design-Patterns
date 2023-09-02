export default class OAuth {
  requestToken = (appKey: string, appSecret: string) => {
    console.log(
      `Getting a request token via given informations => app key: ${appKey}, app secret: ${appSecret}`
    );
    return "requesttoken";
  };

  getAccessToken = (requestToken: string) => {
    console.log(
      `Getting an access token via the provided request token: ${requestToken}`
    );
    return "accesstoken";
  };
}
