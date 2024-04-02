function createFooter() {
    const footer = document.querySelector('footer');

    // p 
    createElementFooter({
        type: 'p',
        textContent: 'PAR JAWED BOUTA',
        appendChild: footer
    });
}


createFooter();



function createElementFooter (param) {
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