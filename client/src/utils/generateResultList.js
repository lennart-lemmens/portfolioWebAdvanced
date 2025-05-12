import { Game } from "../classes/game.js";
import { ResultList } from "../classes/resultlist.js";
import { offset } from "../main.js";

let resultlist;

// Generate result list with game cards
export const generateResultList = (data) => {
    if (offset === 0) resultlist = new ResultList();
    for (let item of data) {
        const game = new Game(item.id, item.name, item.cover, item.genres, item.game_modes, item.platforms, item.storyline);
        resultlist.addGame(game);
    }
    resultlist.showGames();
}