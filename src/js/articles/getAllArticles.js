export async function getAllArticles() {
    var urlencoded = new URLSearchParams();

    var requestOptions = {
        method: 'GET',
        body: urlencoded,
        redirect: 'follow'
    };

    return fetch("http://localhost:3000/articles", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}