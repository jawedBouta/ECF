const h1 = document.querySelector('h1');
const mainContainer = document.querySelector('#main-container-meals');

async function generateListMealsByIngredient() {
    const paramyUrl = new URLSearchParams(window.location.search).get('name');
    
    // redirection
    if(!paramyUrl) return redirectToIndex();

    // h1 
    h1.innerHTML = `Voici les recettes qui utilisent l'ingrédient: <strong>${paramyUrl}</strong>`;

    const data = await getDataFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${paramyUrl}`);
   
    const dataMeals = data.meals;

    // redirection
    if(!dataMeals) return redirectToIndex();

    dataMeals.forEach(meal => {

        // conteneur
        const containersMeals = createElement ({
            type: 'div',
            appendChild: mainContainer
        });

        // img 
        createElement ({
            type: 'img',
            src: meal.strMealThumb,
            appendChild: containersMeals,
            title: meal.strMeal,
            alt: meal.strMeal
        });

        // p 
        createElement ({
            type: 'p',
            textContent: meal.strMeal,
            appendChild: containersMeals
        });

        containersMeals.addEventListener('click', () => {
            window.location.href = `/pages/meal.html?input=${meal.strMeal}`;
        })
        
    });
}

generateListMealsByIngredient();