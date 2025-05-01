"use strict";

import { requestData } from "./functions/requestData.js";
import { getListData } from "./functions/listElements.js";
import { Game } from "./classes/game.js";
import { generateResultList } from "./functions/resultList.js";

const searchButton = document.getElementById("searchButton");
const resultList = document.getElementById("resultList");

const platform = document.getElementById("platform");
const genre = document.getElementById("genre");

// Select-lijsten opvullen met options
getListData("platforms", "fields name; sort name asc; limit 50; where generation > 7;", platform);
getListData("genres", "fields name; sort name asc; limit 25;", genre);

/*
const game = new Game(1, "test", "test", "test", "test");
game.toggleFavorite();
*/

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
    console.log(filters);

    requestData("games", `
          fields name, cover.image_id, genres.name, multiplayer_modes.*, platforms.name;
          limit 10;
          ${filters}
      `)
    .then(data => {
        generateResultList(data);
        searchButton.textContent = "Search";
        searchButton.removeAttribute("disabled");
    })
    .catch(error => {
        resultList.textContent = error;
        console.error(error);
    });
});