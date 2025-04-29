import express from "express";
import cors from "cors";
import {getAuthorizationCode, requestData} from "./fetch.js";

const app = express();
const corsOptions = {
    origin: ["http://localhost:5173"]
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({fruits: ["apple", "orange", "banana"]});
});

app.post("/request", (req, res) => {
    res.json(requestData("games", `fields name; limit 10;`));
})

app.listen(8080, () => {
    console.log("Server started on port 8080");
    getAuthorizationCode();
});