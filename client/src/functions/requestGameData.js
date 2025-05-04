export const requestGameData = async (search, filters) => {
    return fetch(`http://localhost:8080/games?search=${search}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(filters)
    })
    .then(response => response.json())
    .catch(error => console.error(error));
}