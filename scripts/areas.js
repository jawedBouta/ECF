const ingredientsContainer = document.querySelector('#container-areas');

async function generateIngredients() {
    const data = await getDataFetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
   
    const dataAreas = data.meals;

    dataAreas.forEach(async element => {

        let flagUrl = null;
        if(element.strArea !== 'Unknown') {
            flagUrl = await getFlagUrlImg(element.strArea);
        }
        
        const containerElements = createElement({
            type: 'div',
            appendChild: ingredientsContainer
        });

        createElement({
            type: 'p',
            textContent: element.strArea,
            appendChild: containerElements
        });

        const imgFlag = createElement({
            type: 'div',
            appendChild: containerElements,
            title: element.strArea
        });


        imgFlag.style.backgroundImage  = `url(${flagUrl})`;
        imgFlag.style.backgroundPosition = 'center';
        imgFlag.style.backgroundSize = 'cover';
        imgFlag.style.backgroundRepeat = 'no-repeat';

        imgFlag.addEventListener('click', () => {
            window.location.href = `/pages/area.html?input=${element.strArea}`;
        });
    });
}


function nationalityToCountry (nationality) {
    switch(nationality) {
        case 'American' : return 'United States';
        case 'British' : return 'United Kingdom'; 
        case 'Canadian' : return 'Canada';
        case 'Chinese' : return 'China';
        case 'Croatian' : return 'Croatia';
        case 'Dutch' : return 'Netherlands';
        case 'Egyptian' : return 'Egypt'; 
        case 'Filipino' : return 'Philippines'; 
        case 'French' : return 'France';
        case 'Greek' : return 'Greece'; 

        case 'Indian' : return 'India'; 
        case 'Irish' : return 'Ireland'; 
        case 'Italian' : return 'Italy'; 
        case 'Jamaican' : return 'Jamaica'; 
        case 'Japanese' : return 'Japan'; 
        case 'Kenyan' : return 'Kenya'; 

        case 'Malaysian' : return 'Malaysia'; 
        case 'Mexican' : return 'Mexico'; 
        case 'Moroccan' : return 'Morocco'; 
        case 'Polish' : return 'Poland'; 
        case 'Portuguese' : return 'Portugal'; 
        case 'Russian' : return 'Russia'; 
        case 'Spanish' : return 'Spain'; 

        case 'Thai' : return 'Thailand'; 
        case 'Tunisian' : return 'Tunisia'; 
        case 'Turkish' : return 'Turkey'; 
        case 'Unknown' : return 'Unknown'; 
        case 'Vietnamese' : return 'Vietnam'; 
    }
}

async function getFlagUrlImg (byLangage) {
    const convertByCountryName = nationalityToCountry(byLangage);
    const dataCountries = await getDataFetch(`https://restcountries.com/v3.1/name/${convertByCountryName}`);
    return dataCountries[0].flags.png;
}



generateIngredients();