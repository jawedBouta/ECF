const h1 = document.querySelector('h1');
const mainContainer = document.querySelector('#main-container-meals');

async function generateListMealsByIngredient() {
    const paramyUrl = new URLSearchParams(window.location.search).get('name');
    //if(!paramyUrl) return null;
    console.log(paramyUrl);

    // h1 
    h1.innerHTML = `Voici les recettes qui utilisent l'ingrédient: <strong>${paramyUrl}</strong>`;

    const data = await getDataFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${paramyUrl}`);
    console.log(data);
    const dataMeals = data.meals;
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
            appendChild: containersMeals
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