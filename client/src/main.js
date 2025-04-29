"use strict";

const searchButton = document.getElementById("searchButton");
const resultList = document.getElementById("resultList");

const platform = document.getElementById("platform");
const genre = document.getElementById("genre");

// TODO select-lijsten opvullen met options

searchButton.addEventListener("click", () => {
    fetch("http://localhost:8080/request", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ endpoint: "games", bodyText: `
          fields name, first_release_date, genres.name;
          search "mario";
          limit 50;
          where first_release_date > ${Math.floor(Date.now() / 1000)};
      ` })
    })
    .then(response => response.json())
    .then(data => {
        for (let game of data) {
            const p = document.createElement("p");
            p.textContent = game.name;
            resultList.appendChild(p);
        }
        console.log(data);
    });
});