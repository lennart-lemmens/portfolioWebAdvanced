import { darkmodeButton } from "../constants/documentElements";

export const toggleDarkmode = () => {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
        localStorage.setItem("darkmode", true);
    } else {
        localStorage.setItem("darkmode", false);
    }
    setDarkmodeIcon();
}

export const checkDarkmode = () => {
    if (localStorage.getItem("darkmode") === "true") {
        document.body.className = "darkmode";
        setDarkmodeIcon();
    }
}

const setDarkmodeIcon = () => {
    if (localStorage.getItem("darkmode") === "true") {
        darkmodeButton.firstChild.src = "./src/assets/sun.svg";
    } else {
        darkmodeButton.firstChild.src = "./src/assets/moon.svg";
    }
}