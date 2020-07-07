export function renderOne(title, link, snippet) {
    const l = `
    <div class="articles-container">
    <div class="article-title">${title}</div>
    <div class="link">${link}</div>
    <div class="snippet">${snippet}</div>
    </div>
    `
    const container = document.querySelector('.articles-wrapper');
    container.innerHTML += l;
}
