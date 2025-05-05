import express from "express";
import { requestData } from "../controllers/requestData.js";

const gamesRouter = express.Router();

// Request game data from API
gamesRouter.post("/", async (req, res) => {
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

export default gamesRouter;