const wrapper = document.querySelector('.articles-wrapper');

export function renderOne(title = 'что-то', link = 'из дб', snippet) {
    wrapper.innerHTML +=
    `
        <div class="articles-container">
            <div class="article-title">${title}</div>
            <div class="link">${
                link === 'из дб' ? 'из дб' : `<a href="${link}" target="_blank">Ссылка на результат</a>`
            }</div>
            <div class="snippet">${snippet}</div>
        </div>
    `;
}

export function renderArray(arr) {
    wrapper.innerHTML = '';
    wrapper.innerHTML += '<div class="title">Результаты</div>';

    arr.forEach(el => {
        if (el.content) {
            renderOne(undefined, undefined, el.content);
        } else if (el.snippet) {
            renderOne(el.title, el.link, el.snippet);
        }
    });
}
