import { requestGameData } from "./requestGameData";

// Show favorites saved in local storage
export const showFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let filters = {
        id: favorites ? favorites.join(", ") : ""
    }
    requestGameData("", filters, 0);
}