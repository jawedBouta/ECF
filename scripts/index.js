function indexJs() {
    const btnCategories = document.querySelector('#by-categorie button');
    const btnAreas = document.querySelector('#by-area button')
    const btnAlpha = document.querySelector('#by-letters button')


    btnCategories.addEventListener('click', () => {
        window.location.href = `/pages/categories.html`;
    });

    btnAreas.addEventListener('click', () => {
        window.location.href = `/pages/areas.html`;
    });

    btnAlpha.addEventListener('click', () => {
        window.location.href = `/pages/first-letter.html`;
    });
}

indexJs();