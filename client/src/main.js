"use strict";

import { requestGameData } from "./functions/requestGameData.js";
import { getListData } from "./functions/listElements.js";
import { searchButton, searchInput, platform, genre } from "./constants/documentElements.js";

// Fill out select lists in searchbar with options
getListData("platforms", 220, platform);
getListData("genres", 25, genre);

// Clicking the search button fetches game data
searchButton.addEventListener("click", () => {
    requestGameData(search, filters);
});

// Pressing enter in input field triggers search
searchInput.addEventListener("keypress", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchButton.click();
    }
}); // https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp