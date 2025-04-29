import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const corsOptions = {
    origin: ["http://localhost:5173"]
};

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
let authorization;

// Fetch API access token to be used at every request
fetch(`https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=client_credentials`, {
    method: "POST"
}) // Source: https://api-docs.igdb.com/#getting-started
.then(response => response.json())
.then(data => {
    const accessToken = data.access_token;
    const tokenType = data.token_type;
    const tokenTypeCapitalized = tokenType[0].toUpperCase() + tokenType.slice(1); // Source: https://sentry.io/answers/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript/
    authorization = `${tokenTypeCapitalized} ${accessToken}`;
})
.catch(error => {
    console.error(error);
});

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({fruits: ["apple", "orange", "banana"]});
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});