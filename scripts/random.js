async function getRandomMeal () {
    const data = await getDataFetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const dataMealRandom = data.meals[0];
    return dataMealRandom;
}

