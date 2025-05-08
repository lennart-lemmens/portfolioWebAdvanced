import { searchButton, searchButtonImage, resultList } from "../constants/documentElements";
import { generateResultList } from "./generateResultList";

// Fetch game data and display it in the result list
export const requestGameData = async (search, filters, offset) => {
    searchButtonImage.src = "./src/assets/clock.svg";
    searchButton.setAttribute("disabled", "");
    resultList.textContent = "Loading...";
    
    return fetch(`http://localhost:8080/games?search=${search}&offset=${offset}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(filters)
    })
    .then(response => response.json())
    .then(data => {
        generateResultList(data);
    })
    .catch(error => console.error(error))
    .finally(() => {
        searchButtonImage.src = "./src/assets/search.svg";
        searchButton.removeAttribute("disabled");
    });
}