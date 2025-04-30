export class Game {
    constructor(id, name, cover, genres, multiplayermodes) {
        this.id = id;
        this.name = name;
        this.cover = cover;
        this.genres = genres;
        this.multiplayermodes = multiplayermodes;
        this.favorite = JSON.parse(localStorage.getItem("favorites").includes(this.id)) ? true : false;
    }

    toggleFavorite() {
        // check if favorites array exists in localStorage
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        if (favorites == null) favorites = [];

        // toggle game ID in localStorage
        if (this.favorite) {
            favorites.pop(this.id);
            this.favorite = false;
        } else {
            favorites.push(this.id);
            this.favorite = true;
        }
        localStorage.setItem("favorites", JSON.stringify(favorites));
        console.log(this.favorite);
    } // https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage

    createCard() {

    }
}