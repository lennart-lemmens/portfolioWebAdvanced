"use strict";

import { requestGameData } from "./utils/requestGameData.js";
import { getListData } from "./utils/listElements.js";
import { toggleDarkmode, checkDarkmode } from "./utils/darkmode.js";
import { searchButton, favoritesButton, darkmodeButton, searchInput, platform, genre, gamemode } from "./constants/documentElements.js";
import { favoriteIconFull } from "./constants/favoriteIcon.js";

export let search;
export let filters;
export let offset;

// Fill out select lists in searchbar with options
getListData("platforms", 220, platform);
getListData("genres", 25, genre);
getListData("game_modes", 6, gamemode);

// Add favorite icon
favoritesButton.innerHTML = favoriteIconFull;

// Clicking the dark mode button toggles dark mode
darkmodeButton.addEventListener("click", () => toggleDarkmode());

// Set dark mode
window.addEventListener("load", () => checkDarkmode());

// Clicking the search button fetches game data
searchButton.addEventListener("click", () => {
    search = searchInput.value.trim();
    filters = {
        platform: platform.value,
        genre: genre.value,
        game_mode: gamemode.value
    }
    offset = 0;
    requestGameData(search, filters, offset);
});

// Pressing enter in input field triggers search
searchInput.addEventListener("keypress", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchButton.click();
    }
}); // https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp