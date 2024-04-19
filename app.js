//Funciones 
//Añadido de elementos con comprobador de si el elemento es parent o children
const appendElement = (element, body, parent=null) => {
    if (body && parent === null) {
        document.body.appendChild(element);
    } else if (!body && parent !== null) {
        parent.appendChild(element)
    } else {
        console.log("Wrong data sended to appendElement");
    }
};
//Eliminado de elementos con comprobador de si el elemento es parent o children
const removeElement = (elementID, body, parent=null) => {
    if (body && parent === null) {
        document.body.removeChild(elementID);
    } else if (!body && parent !== null) {
        parent.removeChild(elementID)
    } else {
        console.log("Wrong data sended to removeElement");
    }
};
//Creación de elementos parent
const createParentElemet = (element, elementTarget) => {
    const createdElement = document.createElement(element);
    createdElement.setAttribute("id", "_"+elementTarget);
    createdElement.setAttribute("class", elementTarget);
    appendElement(createdElement, true)
};
//Creación de elementos hijos con asignación del parent al que debe ir
const createChildElement = (parentID, element, elementTarget, ) => {
    let parent = document.querySelector("#"+parentID); 
    const createdElement = document.createElement(element);
    createdElement.setAttribute("id", "_"+elementTarget);
    createdElement.setAttribute("class", elementTarget);
    appendElement(createdElement, false, parent)
};
createParentElemet("div", "rootDiv");
createChildElement("_rootDiv", "div", "childDiv");
createChildElement("_rootDiv", "p", "childParagraph");