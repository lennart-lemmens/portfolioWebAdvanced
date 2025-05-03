import { overlay } from "../constants/documentElements.js";

export const closeGamePage = () => {
    overlay.classList.remove("active");
}