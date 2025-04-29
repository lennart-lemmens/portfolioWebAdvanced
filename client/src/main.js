"use strict";

const searchButton = document.getElementById("searchButton");
const resultList = document.getElementById("resultList");

const platform = document.getElementById("platform");
const genre = document.getElementById("genre");

fetch("http://localhost:8080/api")
.then(response => response.json())
.then(data => resultList.textContent = data.fruits);



searchButton.addEventListener("click", () => {
    fetch("http://localhost:8080/request", {
        method: "POST"
    })
    .then(data => {
        resultList.textContent = data.body.name;
        console.table(data);
    });
});