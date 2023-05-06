let username, password, domain, uploadDomain, preViewUrl;
switch (process.env.VUE_APP_ENV) {
  case "development":
    username = "12345";
    password = "12445";
    domain = "";
    uploadDomain = "";
    preViewUrl = "";
    break;
  case "test":
    username = "";
    password = "";
    domain = "";
    uploadDomain = "";
    preViewUrl = "";
    break;
  case "production":
    username = "";
    password = "";
    domain = "";
    uploadDomain = "";
    preViewUrl = "";
    break;
  default:
    break;
}
export { username, password, domain, uploadDomain, preViewUrl };
