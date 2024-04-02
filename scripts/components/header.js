function crateHeader() {
    const header = document.querySelector('header');
    const nav = document.createElement('nav');


    // Logo
    const figureLogo = createElementHeader({
        type: 'figure',
        appendChild: nav
    });

    createElementHeader({
        type: 'img',
        textContent: 'Accueil',
        src: "/public/images/cooking-logo.jpg",
        appendChild: figureLogo
    });

    // Accueil
    createElementHeader({
        type: 'a',
        textContent: 'Accueil',
        href: "/index.html",
        appendChild: nav
    });

    // Catégories
    createElementHeader({
        type: 'a',
        textContent: 'Catégories',
        href: "/pages/categories.html",
        appendChild: nav
    });

    // A - Z
    createElementHeader({
        type: 'a',
        textContent: 'A - Z',
        href: "/pages/first-letter.html",
        appendChild: nav
    });


    // Rechercher
    createElementHeader({
        type: 'a',
        textContent: 'Rechercher',
        href: "/pages/search.html",
        appendChild: nav
    });

     // Zone géographique
     createElementHeader({
        type: 'a',
        textContent: 'Zones',
        href: "/pages/areas.html",
        appendChild: nav
    });

    header.appendChild(nav);
}

crateHeader();



function createElementHeader (param) {
    const element = document.createElement(param.type || 'div');

    if(param.id) {
        element.id = param.id;
    }

    if (param.textContent) {
        element.textContent = param.textContent;
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