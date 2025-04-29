"use strict";

const searchButton = document.getElementById("searchButton");
const resultList = document.getElementById("resultList");

const platform = document.getElementById("platform");
const genre = document.getElementById("genre");

fetch("http://localhost:8080/api")
.then(response => response.json())
.then(data => resultList.textContent = data.fruits);

/*
const request = (endpoint, bodyText) => {
    fetch(`https://www.giantbomb.com/api/${endpoint}/?api_key=${apiKey}&format=json&json_callback=?`)
    .then(response => {
        console.table(response.json());
    })
    .catch(err => {
        console.error(err);
    });
}
*/

searchButton.addEventListener("click", () => request("games", `fields name, platforms, genres, multiplayer_modes, cover;`));