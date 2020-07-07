const renderOne = require('../render-search-results').renderOne;

export async function getAllArticles() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://localhost:3000/articles", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.forEach(el => renderOne('что-то', 'из дб', el.content));
        })
        .catch(error => console.log('error', error));
}