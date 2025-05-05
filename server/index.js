import express from "express";
import cors from "cors";
import { requestData } from "./controllers/requestData.js";

const app = express();
const corsOptions = {
    origin: ["http://localhost:5173"]
};
const port = 8080;

app.use(express.json());
app.use(cors(corsOptions));

app.post("/games", async (req, res) => {
    const search = req.query.search;
    const filters = req.body;

    let searchString = search ? `search "${search}";` : "";

    let validFilters = Object.entries(filters)
        .filter(([_, value]) => value)
        .map(([key, value]) => `${key}s.name = "${value}"`);
    let filtersString = validFilters.length ? `where ${validFilters.join(" & ")};` : "";
    
    requestData("games", `
          fields name, cover.image_id, genres.name, multiplayer_modes.*, platforms.name;
          limit 60;
          ${searchString}
          ${filtersString}
    `)
    .then(data => res.json(data));
});

app.post("/lists/:endpoint", async (req, res) => {
    requestData(req.params.endpoint, `fields name; sort name asc; limit ${req.query.limit};`)
    .then(data => res.send(data));
});

// TO DO: add error handling middleware
// TO DO: move post requests to separate file in routes folder

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});