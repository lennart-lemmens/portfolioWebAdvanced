import { favoriteIconFull, favoriteIconEmpty } from "../constants/favoriteIcon.js";
import { resultList } from "../constants/documentElements.js";
import { search, filters, offset } from "../main.js";
import { requestGameData } from "../utils/requestGameData.js";

export class Game {
    constructor(id, name, cover, genres, gamemodes, platforms, storyline) {
        this.id = id;
        this.name = name;
        this._cover = "";
        this.cover = cover;
        this.genres = genres;
        this.gamemodes = gamemodes;
        this.platforms = platforms;
        this._storyline = "";
        this.storyline = storyline;
        this.favorite = this.setFavorite();
    }

    get cover() {
        return this._cover;
    }

    set cover(value) {
        this._cover = value ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${value.image_id}.jpg` : "https://www.vglist.co/packs/media/images/no-cover-369ad8f0ea82dde5923c942ba1a26482.png";
    }

    get storyline() {
        return this._storyline;
    }

    set storyline(value) {
        this._storyline = value ? value : "";
    }

    getList(object) {
        return object ? `<ul>${object.map(item => `<li>${item.name}</li>`).join('')}</ul>` : "";
    }

    getGameCardList(object) {
        return object ? `${object.map(item => item.name).join(', ')}` : "";
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
        favoriteIcon.addEventListener("click", event => {
            event.stopPropagation();
            this.toggleFavorite();
            favoriteIcon.innerHTML = this.getFavoriteIcon();
        })

        // Game info
        const gameInfo = document.createElement("div");
        gameInfo.className = "gameInfo";
        const gameTitle = document.createElement("h1");
        gameTitle.textContent = this.name;
        gameInfo.appendChild(gameTitle);
        const platformList = document.createElement("p");
        platformList.textContent = this.getGameCardList(this.platforms);
        gameInfo.appendChild(platformList);
        
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
        returnLink.addEventListener("click", () => requestGameData(search, filters, offset));

        // Favorite icon
        const favoriteIcon = document.createElement("div");
        favoriteIcon.className = "favoriteIcon";
        favoriteIcon.innerHTML = this.getFavoriteIcon();
        favoriteIcon.addEventListener("click", () => {
            this.toggleFavorite();
            favoriteIcon.innerHTML = this.getFavoriteIcon();
        })

        // Game title
        const gameTitle = document.createElement("h1");
        gameTitle.textContent = this.name;

        // Cover and info container
        const coverAndInfoContainer = document.createElement("div");
        coverAndInfoContainer.className = "coverAndInfoContainer";
        // Game cover
        const coverImg = document.createElement("img");
        coverImg.src = this.cover;
        coverImg.alt = `${this.name} cover image`;
        coverImg.className = "gamePageCoverImage";
        coverAndInfoContainer.appendChild(coverImg);
        // Game info
        const gameInfo = document.createElement("div");
        gameInfo.className = "gamePageInfo";
        const column1 = document.createElement("div");
        column1.innerHTML = `
        <h3>Genres:</h3>
        ${this.getList(this.genres)}
        `;
        const column2 = document.createElement("div");
        column2.innerHTML = `
        <h3>Game modes:</h3>
        ${this.getList(this.gamemodes)}
        `;
        const column3 = document.createElement("div");
        column3.innerHTML = `
        <h3>Platforms:</h3>
        ${this.getList(this.platforms)}
        `;
        gameInfo.appendChild(column1);
        gameInfo.appendChild(column2);
        gameInfo.appendChild(column3);
        coverAndInfoContainer.appendChild(gameInfo);

        // Game description
        const gameStoryline = document.createElement("p");
        gameStoryline.textContent = this.storyline;

        gamePage.appendChild(returnLink);
        gamePage.appendChild(favoriteIcon);
        gamePage.appendChild(gameTitle);
        gamePage.appendChild(coverAndInfoContainer);
        gamePage.appendChild(gameStoryline);

        resultList.innerHTML = "";
        resultList.appendChild(gamePage);
    }
}