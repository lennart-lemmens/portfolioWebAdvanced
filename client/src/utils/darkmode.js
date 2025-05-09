import { darkmodeButton } from "../constants/documentElements";

// Switch between light and dark mode
export const toggleDarkmode = () => {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
        localStorage.setItem("darkmode", true);
    } else {
        localStorage.setItem("darkmode", false);
    }
    setDarkmodeIcon();
}

// Check in local storage if dark mode should be applied
export const checkDarkmode = () => {
    if (localStorage.getItem("darkmode") === "true") {
        document.body.className = "darkmode";
        setDarkmodeIcon();
    }
}

// Switch between dark mode icons
const setDarkmodeIcon = () => {
    if (localStorage.getItem("darkmode") === "true") {
        darkmodeButton.firstChild.src = "./src/assets/sun.svg";
    } else {
        darkmodeButton.firstChild.src = "./src/assets/moon.svg";
    }
}