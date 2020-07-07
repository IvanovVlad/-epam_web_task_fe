const renderArray = require('../render-search-results').renderArray;

export async function getAllArticles() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://localhost:3000/articles", requestOptions)
        .then(response => response.json())
        .then(result => renderArray(result))
        .catch(error => console.log('error', error));
}