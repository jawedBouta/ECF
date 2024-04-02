const DivCategories = document.querySelector('#container-categories');

async function getMealsCategories() {

    const data = await getDataFetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const dataCategories = data.categories;

    genrateElements(dataCategories);

    return dataCategories;
} 



function genrateElements(data) {
    //reset du contenu pour chaque clique 
    DivCategories.innerHTML = "";
    
    createElement({
        type: 'h1',
        textContent: 'Choisissez la catégorie',
        appendChild: DivCategories
    });

    const mainContainerContent =  createElement({
        type: 'div',
        id: 'main-container-content',
        appendChild: DivCategories
    });

    data.forEach( element => {

        const subContainer = createElement({
            type: 'div',
            class: 'container-content',
            index: element.strCategory,
            appendChild: mainContainerContent
            
        });

        createElement({
            type: 'img',
            src: element.strCategoryThumb,
            textContent: element.strCategory,
            appendChild: subContainer,
            title: element.strCategory,
            alt: element.strMeal
        });

        createElement({
            type: 'p',
            textContent: element.strCategory,
            appendChild: subContainer
        });

        // eventListener pour détecter le clique
        subContainer.addEventListener('click', (e) => {
            const nameCategorie = e.currentTarget.getAttribute('index');
            window.location.href = `/pages/categorie.html?input=${nameCategorie}`;
        })

    });
}

getMealsCategories();