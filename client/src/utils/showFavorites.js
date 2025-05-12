import { requestGameData } from "./requestGameData.js";
import { sort } from "../constants/documentElements.js";

// Show favorites saved in local storage
export const showFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let filters = {
        id: favorites ? favorites.join(", ") : ""
    }
    requestGameData("", filters, 0, sort.value);
}