const inputSearch = document.querySelector('#input-search-by-name');
const btnSearch = document.querySelector('#btn-search-by-name');


const article = document.querySelector('#article-search-by-meal-name');

btnSearch.addEventListener('click', async () => {
    if(!inputSearch.value) return null;

    const data = await getMealByName(inputSearch.value); 
    const dataMeal = data.meals;
    generateElementsMeal (dataMeal);
});

const btnRandom = document.querySelector('#btn-search-random');
btnRandom.addEventListener('click', async () => {
    
    const dataRandomMeal = await getRandomMeal();

    // je créé un tableau pour être en adéquation avec l'autre partie du code qui avait plusieurs
    // recettes avec des tableaux, petit coup de bandit
    generateElementsMeal ([dataRandomMeal]);
});



async function getMealByName (nameMeal) {
    const dataMealByName = await getDataFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nameMeal}`);
    return dataMealByName;
}


function generateElementsMeal (dataMeal) {
    // reset
    article.innerHTML = "";

    if(!dataMeal) {
        createElement({
            type: 'p',
            innerHTML: `Votre recherche a donné <strong>0</strong> résultat.`,
            appendChild: article
        });
        return null;
    }
    createElement({
        type: 'p',
        innerHTML: `Votre recherche a donné <strong>${dataMeal.length}</strong> résultat(s).`,
        appendChild: article
    });

    console.log(dataMeal);

    dataMeal.forEach(meal => {
        // conteneur text + img
        const containerElements = createElement({
            type: 'div',
            appendChild: article
        });

        // img
        const newImg = createElement({
            type: 'img',
            src: meal.strMealThumb,
            appendChild: containerElements
        });

        // conteneurs des données textuels
        const containerTexts = createElement({
            type: 'div',
            appendChild: containerElements
        });

        // titre 
        createElement({
            type: 'p',
            innerHTML: `<strong>${meal.strMeal}</strong>`,
            appendChild: containerTexts,
        })
       
        // texte zone 
        createElement({
            type: 'p',
            innerHTML: `Zone: <strong>${meal.strArea}</strong>`,
            appendChild: containerTexts
        });

        // texte catégorie 
        createElement({
            type: 'p',
            innerHTML: `Catégorie: <strong>${meal.strCategory}</strong>`,
            appendChild: containerTexts
        });
        

        containerElements.addEventListener('click', () => {
            window.location.href = `/pages/meal.html?input=${meal.strMeal}`;
        });

    });

    

    
}