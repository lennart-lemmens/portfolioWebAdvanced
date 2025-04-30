export class Game {
    constructor(id, name, image, genre, multiplayermodes) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.genre = genre;
        this.multiplayermodes = multiplayermodes;
        // check if game is stored in localStorage
        this.favorite = false;
    }

    toggleFavorite() {
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        // Create localStorage containing favorites
        if (favorites == null) favorites = [];

        // check if it contains game id: 
        if (favorites.includes(this.id)) {
            favorites.pop(this.id);
        } else {
            favorites.push(this.id);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    } // https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage
}