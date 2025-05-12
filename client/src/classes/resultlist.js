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

    sortGames(method) {
        switch (method) {
            case "asc":
                this.games.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "desc":
                this.games.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }
        this.showGames();
    }
}