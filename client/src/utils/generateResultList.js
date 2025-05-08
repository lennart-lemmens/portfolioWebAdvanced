import { Game } from "../classes/game.js";
import { resultList } from "../constants/documentElements.js";

// Generate result list with game cards
export const generateResultList = (data) => {
    resultList.innerHTML = "";
    for (let item of data) {
        const game = new Game(item.id, item.name, item.cover, item.genres, item.game_modes, item.platforms, item.storyline);
        resultList.appendChild(game.createCard());
    }
}