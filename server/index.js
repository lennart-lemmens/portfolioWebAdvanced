import express from "express";
import cors from "cors";
import {requestData} from "./fetch.js";

const app = express();
const corsOptions = {
    origin: ["http://localhost:5173"]
};

app.use(express.json());
app.use(cors(corsOptions));

app.post("/request", async (req, res) => {
    requestData(req.body.endpoint, req.body.bodyText)
    .then(data => res.json(data));
})

app.listen(8080, () => {
    console.log("Server started on port 8080");
});