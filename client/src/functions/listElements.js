import { requestData } from "./requestData.js";

export const getListData = (endpoint, bodyText, selectItem) => {
    requestData(endpoint, bodyText)
    .then(data => {
        for (let item of data) {
            const option = document.createElement("option");
            option.textContent = item.name;
            selectItem.appendChild(option);
        }
    })
    .catch(error => console.error(error));
}