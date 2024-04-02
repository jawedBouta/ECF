function createElement (param) {
    const element = document.createElement(param.type || 'div');

    if(param.id) {
        element.id = param.id;
    }

    if (param.textContent) {
        element.textContent = param.textContent;
    }

    if (param.innerHTML) {
        element.innerHTML = param.innerHTML;
    }

    if (param.src) {
        element.src = param.src;
    }

    if (param.href) {
        element.href = param.href;
    }

    if(param.class) {
        element.setAttribute('class', param.class);
    }

    if(param.index) {
        element.setAttribute('index', param.index);
        //console.log(param.index)
    }
    
    if(param.appendChild) {
        const elementParent = param.appendChild;
        elementParent.appendChild(element);
    }

    return element;
}

async function getDataFetch (url) {
    const response = await fetch(url);
    return await response.json();
}

async function redirectionOnRandomMeal() {
    const dataMealRandom = await getDataRandomMeal();
    window.location.href = `http://127.0.0.1:5500/pages/meal.html?input=${dataMealRandom.strMeal}`;
}

function redirectToIndex() {
    window.location.href = `http://127.0.0.1:5500/index.html`;
}


async function getDataRandomMeal () {
    const data = await getDataFetch('https://www.themealdb.com/api/json/v1/1/random.php');
    return data.meals[0];
}

