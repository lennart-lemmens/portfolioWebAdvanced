import { resultList } from "../constants/documentElements.js";
import { requestGameData } from "../utils/requestGameData.js";

export class ResultList {
    constructor(search, filters, offset, sort) {
        this.search = search;
        this.filters = filters;
        this.offset = offset;
        this.sort = sort;
        this.games = [];
    }

    addGame(game) {
        this.games.push(game);
    }

    sortGames(sortMethod) {
        this.sort = sortMethod;
        switch (sortMethod) {
            case "asc":
                this.games.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "desc":
                this.games.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }
        this.showGames();
    }

    loadMoreGames() {
        this.offset += 100;
        requestGameData(this.search, this.filters, this.offset, this.sort);
    }
}