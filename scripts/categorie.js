const articleMeals = document.querySelector('#meals-by-categorie');

async function getMealsByCategory() {

    const searchParams = new URLSearchParams(window.location.search);
    inputMeal = searchParams.get('input')
    if(!inputMeal) return redirectToIndex();

    const data = await getDataFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputMeal}`);
    const dataMealsByCategory = data.meals;
    if(!dataMealsByCategory) return redirectToIndex();
    
    // RESET
    articleMeals.innerHTML = "";

    createElement({
        type: 'h1',
        textContent: 'Choisissez la catégorie',
        appendChild: articleMeals
    });

    const mainContainerContent =  createElement({
        type: 'div',
        id: 'main-container-content',
        appendChild: articleMeals
    });

    dataMealsByCategory.forEach(element => {

        // div 
        const containerElements = createElement({
            type: 'div',
            class: 'container-categorie',
            index: element.strMeal,
            appendChild: mainContainerContent,
        });

        // title plat
        createElement ({
            type: 'p',
            textContent: `${element.strMeal}`,
            appendChild: containerElements
        });

        // vignettes d'img
        createElement({
            type : 'img',
            src: element.strMealThumb,
            appendChild: containerElements,
            title: element.strMeal,
            alt: element.strMeal
        })

        // l'event clique

        containerElements.addEventListener('click', (e) => {
            const nameMeal = e.currentTarget.getAttribute('index');
            window.location.href = `/pages/meal.html?input=${nameMeal}`;
        })

    });
}

getMealsByCategory();
