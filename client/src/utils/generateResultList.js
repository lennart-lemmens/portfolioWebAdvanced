import { Game } from "../classes/game.js";
import { resultlist } from "./requestGameData.js";

// Generate result list with game cards
export const generateResultList = data => {
    for (let item of data) {
        const game = new Game(item.id, item.name, item.cover, item.genres, item.game_modes, item.platforms, item.storyline);
        resultlist.addGame(game);
    }
    resultlist.showGames();
}