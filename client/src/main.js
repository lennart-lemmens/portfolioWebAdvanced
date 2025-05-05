"use strict";

import { requestGameData } from "./functions/requestGameData.js";
import { getListData } from "./functions/listElements.js";
import { generateResultList } from "./functions/generateResultList.js";
import { searchButton, resultList, searchInput, platform, genre } from "./constants/documentElements.js";

// Select-lijsten opvullen met options
getListData("platforms", 220, platform);
getListData("genres", 25, genre);

searchButton.addEventListener("click", () => {
    searchButton.textContent = "Loading...";
    searchButton.setAttribute("disabled", "");
    resultList.textContent = "Loading...";

    let search = searchInput.value;

    let filters = {
        platform: platform.value,
        genre: genre.value
    }


    requestGameData(search, filters)
    .then(data => {
        generateResultList(data);
    })
    .catch(error => {
        resultList.textContent = error;
        console.error(error);
    })
    .finally(() => {
        searchButton.textContent = "Search";
        searchButton.removeAttribute("disabled");
    });
});

// Pressing enter in input field triggers search
searchInput.addEventListener("keypress", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchButton.click();
    }
}); // https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp