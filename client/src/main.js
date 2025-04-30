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

    requestData("games", `
          fields name, first_release_date, genres.name;
          search "mario";
          limit 50;
          where first_release_date > ${Math.floor(Date.now() / 1000)};
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