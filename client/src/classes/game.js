export class Game {
    constructor(id, name, cover, genres, multiplayermodes, platforms) {
        this.id = id;
        this.name = name;
        this.cover = cover.image_id ? `https://images.igdb.com/igdb/image/upload/t_cover_med/${cover.image_id}.jpg` : "";
        this.genres = genres;
        this.multiplayermodes = multiplayermodes ? multiplayermodes : "Singleplayer";
        this.platforms = platforms;
        this.favorite = (JSON.parse(localStorage.getItem("favorites")) && JSON.parse(localStorage.getItem("favorites").includes(this.id))) ? true : false;
    }

    toggleFavorite() {
        // check if favorites array exists in localStorage
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        if (favorites == null) favorites = [];

        // toggle game ID in localStorage
        if (this.favorite) {
            const index = favorites.indexOf(this.id);
            favorites.splice(index, 1);
            this.favorite = false;
        } else {
            favorites.push(this.id);
            this.favorite = true;
        }
        localStorage.setItem("favorites", JSON.stringify(favorites));
        console.log(this.favorite);
    } // https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage

    getFavoriteIcon() {
        if (this.favorite) {
            return `
            <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 482.207 482.207" xml:space="preserve">
            <polygon points="482.207,186.973 322.508,153.269 241.104,11.803 159.699,153.269 0,186.973 109.388,308.108 92.094,470.404 
                241.104,403.803 390.113,470.404 372.818,308.108 "/>
            </svg>
            `;
        } else {
            return `
            <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 482.207 482.207" xml:space="preserve">
            <path d="M482.207,186.973l-159.699-33.705L241.104,11.803l-81.404,141.465L0,186.973l109.388,121.134L92.094,470.404l149.01-66.6
                l149.01,66.6l-17.294-162.296L482.207,186.973z M241.104,370.943l-113.654,50.798l13.191-123.788l-83.433-92.393l121.807-25.707
                l62.09-107.9l62.09,107.9L425,205.561l-83.433,92.393l13.191,123.788L241.104,370.943z"/>
            </svg>
            `;
        }
    }

    createCard() {
        const card = document.createElement("div");
        
        const coverImg = document.createElement("img");
        coverImg.src = this.cover;
        coverImg.alt = `${this.name} cover image`;

        const favoriteIcon = document.createElement("div");
        favoriteIcon.className = "favoriteIcon";
        favoriteIcon.innerHTML = this.getFavoriteIcon();
        favoriteIcon.addEventListener("click", () => {
            this.toggleFavorite();
            favoriteIcon.innerHTML = this.getFavoriteIcon();
        })

        const h1 = document.createElement("h1");
        h1.textContent = this.name;
        
        card.appendChild(coverImg);
        card.appendChild(favoriteIcon);
        card.appendChild(h1);

        return card;
    }
}