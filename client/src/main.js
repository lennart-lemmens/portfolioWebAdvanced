"use strict";

import { requestGameData } from "./utils/requestGameData.js";
import { getListData } from "./utils/listElements.js";
import { toggleDarkmode, checkDarkmode } from "./utils/darkmode.js";
import { showFavorites } from "./utils/showFavorites.js";
import { searchButton, showFavoritesButton, favoritesButton, darkmodeButton, searchInput, platform, genre, gamemode, sort } from "./constants/documentElements.js";
import { favoriteIconFull } from "./constants/favoriteIcon.js";
import { resultlist } from "./utils/requestGameData.js";

export let search;
export let filters;
export let offset = 0;

// Fill out select lists in searchbar with options
getListData("platforms", 220, platform);
getListData("genres", 25, genre);
getListData("game_modes", 6, gamemode);

// Favorites button
favoritesButton.innerHTML = favoriteIconFull;
showFavoritesButton.addEventListener("click", () => showFavorites());

// Dark mode
darkmodeButton.addEventListener("click", () => toggleDarkmode());
window.addEventListener("load", () => checkDarkmode());

// Search button
searchButton.addEventListener("click", () => {
    search = searchInput.value.trim();
    filters = {
        "platforms.name": platform.value ? `"${platform.value}"`: "",
        "genres.name": genre.value ? `"${genre.value}"`: "",
        "game_modes.name": gamemode.value ? `"${gamemode.value}"`: ""
    }
    offset = 0;
    requestGameData(search, filters, offset, sort.value);
});

// Pressing enter in input field triggers search
searchInput.addEventListener("keypress", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchButton.click();
    }
});

sort.addEventListener("change", () => {
    if (resultlist) resultlist.sortGames(sort.value);
});