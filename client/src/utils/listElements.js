export const getListData = (endpoint, limit, selectItem) => {
    fetch(`http://localhost:8080/lists/${endpoint}?limit=${limit}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        for (let item of data) {
            const option = document.createElement("option");
            option.textContent = item.name;
            option.value = item.name;
            selectItem.appendChild(option);
        }
    })
    .catch(error => console.error(error));
}