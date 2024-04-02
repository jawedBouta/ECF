const divSearchByletters = document.querySelector('#container-search-by-letters');
const divlistMeals = document.querySelector('#article-meals-by-letters');
const elementResultSearch = document.querySelector('#text-result-search');
const letASCIIRef = 97; // a
const letters = [];

generateLetters();



async function getMealPerFirstLetter (event) {

    divlistMeals.innerHTML = "";
    const data = await getDataFetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${event.target.innerText}`);
    
    const dataMeals = data.meals;
    const countResultsSearch = (dataMeals) ? dataMeals.length : 0;

    if(dataMeals) {
        dataMeals.forEach(element => {
            const container = document.createElement('div');
            container.classList = "container-meals-by-letters";
            divlistMeals.appendChild(container);
    
            const newP = document.createElement('p');
            newP.textContent = element.strMeal;
            container.appendChild(newP);
    
            const newImg = document.createElement('img');
            newImg.src = element.strMealThumb;
            newImg.title = element.strMeal;
            newImg.alt = element.strMeal;
            container.appendChild(newImg);
    
            newImg.addEventListener('click', imgClickable);
                function imgClickable (event) {
                window.location.href = `/pages/meal.html?input=${element.strMeal}`;
            }
        });
    }

    const txtResultsSearch = `Vous avez <strong>${countResultsSearch}</strong> résultat(s) pour les recettes commançant par la lettre  <strong>${event.target.innerText}</strong> :`;
    elementResultSearch.innerHTML = txtResultsSearch;
}





function generateLetters() {
    for(let i = letASCIIRef; i < letASCIIRef+26; i++) {
        letters.push(String.fromCharCode(i));
    }
    letters.forEach(element => {
        const newP = document.createElement('p');
        newP.textContent = element;
        newP.id = element;
        divSearchByletters.appendChild(newP);

        newP.addEventListener('click', getMealPerFirstLetter);
    });
}