async function getMealsByArea() {
    const searchParams = new URLSearchParams(window.location.search);
    let queryUrl = searchParams.get('input');

    // sélection de conteneurs
    const divMain = document.querySelector('#container-meals-by-area');
    const h1 = document.querySelector('h1');
    
    const data = await getDataFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${queryUrl}`);
    const dataMealsByArea = data.meals;
    if(!dataMealsByArea) return redirectToIndex();

    //h1 text
    h1.innerHTML = `Découvrez nos plats de la zone: <br><strong>${queryUrl}</strong>`;

    dataMealsByArea.forEach(meal => {
        const containerArticleMeal = createElement({
            type: 'div',
            src: meal.strMealThumb,
            index: meal.strMeal,
            appendChild: divMain
        });

        createElement({
            type: 'img',
            src: meal.strMealThumb,
            appendChild: containerArticleMeal,
            title: meal.strMeal,
            alt: meal.strMeal
        });

        createElement({
            type: 'p',
            textContent: meal.strMeal,
            appendChild: containerArticleMeal
        });

        containerArticleMeal.addEventListener('click', () => {
            window.location.href = `/pages/meal.html?input=${meal.strMeal}`;
        });
    });
}

getMealsByArea();