import { favoriteIconFull, favoriteIconEmpty } from "../constants/favoriteIcon.js";

export class Game {
    constructor(id, name, cover, genres, multiplayermodes, platforms) {
        this.id = id;
        this.name = name;
        this.cover = cover ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg` : "https://www.vglist.co/packs/media/images/no-cover-369ad8f0ea82dde5923c942ba1a26482.png";
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
            return favoriteIconFull
        } else {
            return favoriteIconEmpty;
        }
    }

    createCard() {
        const card = document.createElement("div");
        card.className = "gameCard";
        
        // Cover image
        const coverImgContainer = document.createElement("div");
        coverImgContainer.className = "coverImageContainer";
        const coverImg = document.createElement("img");
        coverImg.src = this.cover;
        coverImg.alt = `${this.name} cover image`;
        coverImg.className = "coverImage";
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

        return card;
    }
}