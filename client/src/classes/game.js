import { favoriteIconFull, favoriteIconEmpty } from "../constants/favoriteIcon.js";
import { resultList } from "../constants/documentElements.js";

export class Game {
    constructor(id, name, cover, genres, gamemodes, platforms) {
        this.id = id;
        this.name = name;
        this._cover = "";
        this.cover = cover;
        this.genres = genres;
        this.gamemodes = gamemodes;
        this.platforms = platforms;
        this.favorite = this.setFavorite();
    }

    get cover() {
        return this._cover;
    }

    set cover(value) {
        this._cover = value ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${value.image_id}.jpg` : "https://www.vglist.co/packs/media/images/no-cover-369ad8f0ea82dde5923c942ba1a26482.png";
    }

    getList(array) {
        return array.map(object => object.name).join(", ");
    }

    setFavorite() {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        return favorites.includes(this.id);
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
    } // https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage

    getFavoriteIcon() {
        if (this.favorite) {
            return favoriteIconFull
        } else {
            return favoriteIconEmpty;
        }
    }

    createCard() {
        const card = document.createElement("div");
        card.className = "gameCard";
        
        // Cover image container
        const coverImgContainer = document.createElement("div");
        coverImgContainer.className = "coverImageContainer";
        // Cover image
        const coverImg = document.createElement("img");
        coverImg.src = this.cover;
        coverImg.alt = `${this.name} cover image`;
        coverImg.className = "coverImage";
        // Blurred background to replace whitespace
        const blurredBackground = document.createElement("div");
        blurredBackground.className = "blurredBackground";
        blurredBackground.style.backgroundImage = `url('${this.cover}')`;
        
        coverImgContainer.appendChild(blurredBackground);
        coverImgContainer.appendChild(coverImg)

        // Favorite icon
        const favoriteIcon = document.createElement("div");
        favoriteIcon.className = "favoriteIcon";
        favoriteIcon.innerHTML = this.getFavoriteIcon();
        favoriteIcon.addEventListener("click", () => {
            this.toggleFavorite();
            favoriteIcon.innerHTML = this.getFavoriteIcon();
        })

        // Game info
        const gameInfo = document.createElement("div");
        gameInfo.className = "gameInfo";
        const h1 = document.createElement("h1");
        h1.textContent = this.name;
        gameInfo.appendChild(h1);
        
        card.appendChild(coverImgContainer);
        card.appendChild(favoriteIcon);
        card.appendChild(gameInfo);

        card.addEventListener("click", () => this.showGamePage());

        return card;
    }

    showGamePage() {
        const gamePage = document.createElement("article");
        gamePage.className = "gamePage";

        // Link to result page
        const returnLink = document.createElement("a");
        returnLink.className = "returnLink";
        returnLink.textContent = "< back";
        returnLink.addEventListener("click", () => alert("Placeholder: return to result page."));

        // Favorite icon
        const favoriteIcon = document.createElement("div");
        favoriteIcon.className = "favoriteIcon";
        favoriteIcon.innerHTML = this.getFavoriteIcon();
        favoriteIcon.addEventListener("click", () => {
            this.toggleFavorite();
            favoriteIcon.innerHTML = this.getFavoriteIcon();
        })

        // Game title
        const h1 = document.createElement("h1");
        h1.textContent = this.name;

        // Game cover
        const coverImg = document.createElement("img");
        coverImg.src = this.cover;
        coverImg.alt = `${this.name} cover image`;
        coverImg.className = "gamePageCoverImage";

        // Game info
        const ul = document.createElement("ul");
        ul.innerHTML = `
        <li>Genres: ${this.getList(this.genres)}</li>
        <li>Game modes: ${this.getList(this.gamemodes)}</li>
        <li>Platforms: ${this.getList(this.platforms)}</li>
        `;

        gamePage.appendChild(returnLink);
        gamePage.appendChild(favoriteIcon);
        gamePage.appendChild(h1);
        gamePage.appendChild(coverImg);
        gamePage.appendChild(ul);

        resultList.innerHTML = "";
        resultList.appendChild(gamePage);
    }
}