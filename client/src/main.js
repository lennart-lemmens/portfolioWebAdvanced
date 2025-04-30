"use strict";

import { requestData } from "./functions/requestData.js";
import { getListData } from "./functions/listElements.js";
import { Game } from "./classes/game.js";

const searchButton = document.getElementById("searchButton");
const resultList = document.getElementById("resultList");

const platform = document.getElementById("platform");
const genre = document.getElementById("genre");

// TODO select-lijsten opvullen met options
getListData("platforms", "fields name; sort name asc; limit 50; where generation > 7;", platform);
getListData("genres", "fields name; sort name asc; limit 25;", genre);

const game = new Game(1, "test", "test", "test", "test");
game.toggleFavorite();

const createCard = data => {
    resultList.innerHTML = "";
    for (let game of data) {
        const p = document.createElement("p");
        p.textContent = game.name;
        resultList.appendChild(p);
    }
    console.table(data);
} // in game class zetten?

searchButton.addEventListener("click", () => {
    searchButton.textContent = "Loading...";
    searchButton.setAttribute("disabled", "");
    resultList.textContent = "Loading...";

    let filters = "where ";

    filters += platform.value ? `platforms.name = ("${platform.value}") & ` : "";
    filters += genre.value ? `genres.name = ("${genre.value}") $ ` : "";
    filters -= " & ";
    filters += ";";

    if (filters === "where ;") filters = "";

    requestData("games", `
          fields name, cover, genres.name, multiplayer_modes;
          limit 50;
          ${filters}
      `)
    .then(data => {
        createCard(data);
        searchButton.textContent = "Search";
        searchButton.removeAttribute("disabled");
    })
    .catch(error => {
        resultList.textContent = error;
        console.error(error);
    });
});