export async function searchArticles() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("content", "АВАРИЯ");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    return fetch("http://localhost:3000/articles/find", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}