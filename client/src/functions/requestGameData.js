import { searchButton, resultList, searchInput, platform, genre } from "../constants/documentElements";
import { generateResultList } from "./generateResultList";

// Fetch game data and display it in the result list
export const requestGameData = async () => {
    searchButton.textContent = "Loading...";
    searchButton.setAttribute("disabled", "");
    resultList.textContent = "Loading...";

    let search = searchInput.value;

    let filters = {
        platform: platform.value,
        genre: genre.value
    }
    
    return fetch(`http://localhost:8080/games?search=${search}`, {
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
        searchButton.textContent = "Search";
        searchButton.removeAttribute("disabled");
    });
}