async function getRandomMeal () {

    
    // const responseApi = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    // const data = await responseApi.json();
    const data = await getDataFetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const dataMealRandom = data.meals[0];
    return dataMealRandom;

    

    // const titleMealElement = document.querySelector('#title-meal');
    // titleMealElement.textContent = dataMeal.strMeal;

    // const recipeInstruction = document.querySelector('#instruction-recipe');
    // recipeInstruction.textContent = dataMeal.strInstructions;

    // const imgMealElement = document.querySelector('#img-meal');
    // imgMealElement.src = dataMeal.strMealThumb;
}

//getRandomMeal ();

// const btnGenerateMeal = document.querySelector('#random-meal');
// btnGenerateMeal.addEventListener('click', getRandomMeal);

//getRandomMeal ();