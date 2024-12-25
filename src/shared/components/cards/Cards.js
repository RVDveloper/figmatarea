import { pikaLoader } from "/src/shared/components/loaders/Loaders.js";

let addOpenListenerAtCard = (cardElement) => cardElement.addEventListener("click", (e) => cardElement.classList.toggle('open'));

export function createCards(cards, container) {

    let cardsElements = []

    for (let card of cards) {
        let cardElement = createCard(card.textCard, card.imageUrl, card.onclickAction);
        cardsElements.push(cardElement);
    }

    container.append(...cardsElements);
}




function createCard(textCard, image, onclickAction) {

    const card = document.createElement("div");
    card.classList.add("card");

    addOpenListenerAtCard(card)
    if(onclickAction) card.addEventListener("click", onclickAction);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = textCard; 

    const cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = image; 
    cardImage.alt = "Image"; 

    cardHeader.append(cardTitle, cardImage); 

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    cardInfo.append(pikaLoader("13%"));

    card.append(cardHeader, cardInfo); 
    return card;
}
