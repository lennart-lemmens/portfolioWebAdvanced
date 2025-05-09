import { requestGameData } from "./requestGameData";

export const showFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let filters = {
        id: favorites ? favorites.join(", ") : ""
    }
    requestGameData("", filters, 0);
}