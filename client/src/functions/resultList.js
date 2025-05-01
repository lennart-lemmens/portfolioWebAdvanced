import { Game } from "../classes/game.js";

const resultList = document.getElementById("resultList");

// Generate result list with game cards
export const generateResultList = (data) => {
    resultList.innerHTML = "";
    for (let item of data) {
        const game = new Game(item.id, item.name, item.cover, item.genres, item.multiplayer_modes, item.platforms);
        resultList.appendChild(game.createCard());
    }
}