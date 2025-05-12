import express from "express";
import { requestData } from "../controllers/requestData.js";

const gamesRouter = express.Router();

// Request game data from API
gamesRouter.post("/", async (req, res) => {
    const search = req.query.search;
    const filters = req.body;
    const offset = req.query.offset;
    const sort = req.query.sort;

    let searchString = search ? `search "${search}";` : "";

    let validFilters = Object.entries(filters)
        .filter(([_, value]) => value)
        .map(([key, value]) => `${key} = (${value})`);
    let filtersString = validFilters.length ? `where ${validFilters.join(" & ")};` : "";

    let sortString = (sort && !search) ? `sort name ${sort};` : "";

    requestData("games", `
          ${searchString}
          fields name, cover.image_id, genres.name, game_modes.name, platforms.name, storyline;
          ${filtersString}
          limit 100;
          offset ${offset};
          ${sortString}
    `)
    .then(data => res.json(data));
});

export default gamesRouter;