
async function getMealById() {
    const searchParams = new URLSearchParams(window.location.search);
    const paramUrl = searchParams.get('input');
    if(!paramUrl) return await redirectionOnRandomMeal();

    const data = await getDataFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${paramUrl}`);

    if(!data.meals) return await redirectionOnRandomMeal();

    const dataMeal = data.meals[0];

    console.log(dataMeal);

    // Sélections des éléments
    const titleMealElement = document.querySelector('#title-meal');
    const imgMealElement = document.querySelector('#img-meal');
    const recipeInstruction = document.querySelector('#instruction-recipe');
    const categorieRecipe = document.querySelector('#categorie-recipe');
    const areaRecipe = document.querySelector('#area-recipe');
    const sourceRecipe = document.querySelector('#source');

    const contentIngredients = document.querySelector('#content-ingredients');
    const youtube = document.querySelector('#youtube');

    //img
    imgMealElement.src = dataMeal.strMealThumb;
    //titre
    titleMealElement.textContent = dataMeal.strMeal;


    //catégories
    categorieRecipe.innerHTML = `Catégorie: <strong>${dataMeal.strCategory}</strong>`;
    const categorieStrong = document.querySelector('#categorie-recipe > strong');
    categorieStrong.addEventListener('click', () => {
        window.location.href = `/pages/categorie.html?input=${dataMeal.strCategory}`;
    });
    // zones
    areaRecipe.innerHTML = `Zone géographique: <strong>${dataMeal.strArea}</strong>`;
    const areaStrong = document.querySelector('#area-recipe > strong')
    areaStrong.addEventListener('click', () => {
        window.location.href = `/pages/area.html?input=${dataMeal.strArea}`;
    });

    //recette
    recipeInstruction.textContent = dataMeal.strInstructions;
    
    // source recette
    if(dataMeal.strSource) {
        sourceRecipe.innerHTML = `<span>Source:</span> ${dataMeal.strSource}`;
        sourceRecipe.href = dataMeal.strSource;
    }
    

    // Ingrédients + composants
    for(let i = 1; i <= 20; i++) {
        if(dataMeal[`strIngredient${i}`] && dataMeal[`strMeasure${i}`]) {
            const ingredient = dataMeal[`strIngredient${i}`];
            const Measure = dataMeal[`strMeasure${i}`];
            const ingredientElement = createElement({
                type: 'p',
                innerHTML: ` - ${ingredient}: <strong>${Measure}</strong>`,
                appendChild: contentIngredients
            });

            ingredientElement.addEventListener('click', () => {
                window.location.href = `/pages/ingredient.html?name=${ingredient}`
            })
        }
    }

    // Youtube popopo, visiblement l'autre type de lien n'est pas apprécié par 
    // la balise iframe, j'ai je prends donc l'id du lien de l'api, puis l'utilise dans le format 
    // pour la balise iframe
    if(dataMeal.strYoutube) {
        const idYoutube = youtube_parser(dataMeal.strYoutube);
        youtube.src = `https://www.youtube.com/embed/${idYoutube}`;
        // youtube.style.width = "700px";
        // youtube.style.height = "350px";
    }
}


function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

try {
    getMealById();
}
catch(e) {
    console.log(e.message)
}

