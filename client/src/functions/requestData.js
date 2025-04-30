export const requestData = async (endpoint, bodyText) => {
    return fetch("http://localhost:8080/request", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ endpoint: endpoint, bodyText: bodyText })
    })
    .then(response => response.json())
    .catch(error => console.error(error));
}