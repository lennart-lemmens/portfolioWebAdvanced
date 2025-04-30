"use strict";

import { Game } from "./classes/game.js";

const searchButton = document.getElementById("searchButton");
const resultList = document.getElementById("resultList");

const platform = document.getElementById("platform");
const genre = document.getElementById("genre");

const requestData = async (endpoint, bodyText) => {
    return fetch("http://localhost:8080/request", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ endpoint: endpoint, bodyText: bodyText })
    })
    .then(response => response.json())
}

// TODO select-lijsten opvullen met options
const getPlatformList = () => {
    requestData("platforms", "fields name; sort name asc; limit 50; where generation > 7;")
    .then(data => {
        for (let item of data) {
            const option = document.createElement("option");
            option.textContent = item.name;
            platform.appendChild(option);
        }
    })
}

getPlatformList();

const createCard = data => {
    resultList.innerHTML = "";
    for (let game of data) {
        const p = document.createElement("p");
        p.textContent = game.name;
        resultList.appendChild(p);
    }
    console.table(data);
} // class van maken?

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