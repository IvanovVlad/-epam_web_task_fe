const renderOne = require('../render-search-results').renderOne;

export async function searchArticles(content) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://localhost:3000/articles/find?content=" + content, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (Array.isArray(result)) {
                result.forEach(el => renderOne('что-то', 'из дб', el.content));
            }
        })
        .catch(error => console.log('error', error));
}