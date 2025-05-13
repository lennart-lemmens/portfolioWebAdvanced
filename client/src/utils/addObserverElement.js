import { resultListContainer } from "../constants/documentElements";
import { resultlist } from "./requestGameData";

export const addObserverElement = () => {
  const observerElement = document.createElement("div");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        resultlist.loadMoreGames();
      }
    });
  });
  observer.observe(observerElement);
  resultListContainer.appendChild(observerElement);
};
