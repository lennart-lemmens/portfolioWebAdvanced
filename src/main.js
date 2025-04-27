"use strict";

const clientID = "457e81p2tj4yjdvryru7at1gb7fcgo";
const clientSecret = "h98zm69txdxhlhp45gtujhf51hlccm";

// Fetch API access token to be used at every request
fetch(`https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=client_credentials`, {
    method: "POST"
}) // Source: https://api-docs.igdb.com/#getting-started
.then(response => response.json())
.then(data => {
    const accessToken = data.access_token;
    const tokenType = data.token_type;
    const tokenTypeCapitalized = tokenType[0].toUpperCase() + tokenType.slice(1); // Source: https://sentry.io/answers/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript/
    const authorization = `${tokenTypeCapitalized} ${accessToken}`;
})
.catch(error => {
    console.error(error);
});
