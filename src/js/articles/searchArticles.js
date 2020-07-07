const renderArray = require('../render-search-results').renderArray;

export async function searchArticles(content) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://localhost:3000/articles/find?content=" + content, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (Array.isArray(result)) {
                renderArray(result);
            }
        })
        .catch(error => console.log('error', error));
}