import { Game } from "../classes/game.js";
import { resultList, resultListContainer } from "../constants/documentElements.js";
import { resultlist } from "./requestGameData.js";

// Generate result list with game cards
export const generateResultList = data => {
    resultListContainer.removeChild(resultListContainer.lastChild);
    for (let item of data) {
        const game = new Game(item.id, item.name, item.cover, item.genres, item.game_modes, item.platforms, item.storyline);
        resultlist.addGame(game);
        resultList.appendChild(game.createCard());
    }
    if (data.length !== 0) {
        const observerElement = document.createElement("div");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    resultlist.loadMoreGames();
                }
            });
        });
        observer.observe(observerElement);
        resultListContainer.appendChild(observerElement);
    }
    
}