import dotenv from "dotenv";
dotenv.config();

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// Fetch API access token to be used at every request
const getAccessToken = async () => {
  return fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=client_credentials`,
    {
      method: "POST",
    }
  )
    .then(response => response.json())
    .then(data => data.access_token)
    .catch(error => console.error(error));
};

// Request data from API
export const requestData = async (endpoint, bodyText) => {
  const accessToken = await getAccessToken();

  const response = await fetch(`https://api.igdb.com/v4/${endpoint}`, {
      method: 'POST',
      headers: {
          'Client-ID': process.env.CLIENT_ID,
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'text/plain',
      },
      body: bodyText
  });

  const data = await response.json();
  return data;
};
