import { resultList } from "../constants/documentElements.js";

export class ResultList {
    constructor() {
        this.games = [];
    }

    addGame(game) {
        this.games.push(game);
    }

    showGames() {
        resultList.innerHTML = "";
        for (let game of this.games) {
            resultList.appendChild(game.createCard());
        }
    }
}