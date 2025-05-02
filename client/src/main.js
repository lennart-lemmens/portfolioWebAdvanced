"use strict";

import { requestData } from "./functions/requestData.js";
import { getListData } from "./functions/listElements.js";
import { generateResultList } from "./functions/resultList.js";
import { searchButton, resultList, platform, genre } from "./constants/documentElements.js";

// Select-lijsten opvullen met options
getListData("platforms", "fields name; sort name asc; limit 50; where generation > 7;", platform);
getListData("genres", "fields name; sort name asc; limit 25;", genre);

searchButton.addEventListener("click", () => {
    searchButton.textContent = "Loading...";
    searchButton.setAttribute("disabled", "");
    resultList.textContent = "Loading...";

    let filters = "where ";
    filters += platform.value ? `platforms.name = ("${platform.value}") & ` : "";
    filters += genre.value ? `genres.name = ("${genre.value}") & ` : "";
    filters = filters.substring(0, filters.length-3);
    filters += ";";
    if (filters === "whe;") filters = "";

    requestData("games", `
          fields name, cover.image_id, genres.name, multiplayer_modes.*, platforms.name;
          limit 60;
          ${filters}
      `)
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