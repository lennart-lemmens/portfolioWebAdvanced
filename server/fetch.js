import dotenv from "dotenv";
dotenv.config();

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
let authorization;

// Fetch API access token to be used at every request
export const getAuthorizationCode = () => {
  fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=client_credentials`,
    {
      method: "POST",
    }
  ) // Source: https://api-docs.igdb.com/#getting-started
    .then((response) => response.json())
    .then((data) => {
      const accessToken = data.access_token;
      const tokenType = data.token_type;
      const tokenTypeCapitalized =
        tokenType[0].toUpperCase() + tokenType.slice(1); // Source: https://sentry.io/answers/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript/
      authorization = `${tokenTypeCapitalized} ${accessToken}`;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const requestData = (endpoint, bodyText) => {
  fetch(`https://api.igdb.com/v4/${endpoint}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Client-ID": clientID,
      "Authorization": authorization,
    },
    body: bodyText,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
};
