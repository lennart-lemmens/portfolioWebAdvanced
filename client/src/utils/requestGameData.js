import { searchButton, searchButtonImage, resultList, resultListContainer } from "../constants/documentElements.js";
import { generateResultList } from "./generateResultList.js";
import { ResultList } from "../classes/resultlist.js";

export let resultlist;

// Fetch game data and display it in the result list
export const requestGameData = async (search, filters, offset, sort) => {
    console.log(offset);
    if (offset === 0) {
        searchButtonImage.src = "./src/assets/clock.svg";
        searchButton.setAttribute("disabled", "");
        resultList.innerHTML = "";
        resultlist = new ResultList(search, filters, 0, sort);
    } else {
        resultListContainer.removeChild(resultListContainer.lastChild);
    }
    const loading = document.createElement("div");
    loading.textContent = "Loading...";
    resultListContainer.appendChild(loading);
    
    return fetch(`http://localhost:8080/games?search=${search}&offset=${offset}&sort=${sort}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(filters)
    })
    .then(response => response.json())
    .then(data => generateResultList(data))
    .catch(error => console.error(error))
    .finally(() => {
        searchButtonImage.src = "./src/assets/search.svg";
        searchButton.removeAttribute("disabled");
    });
}