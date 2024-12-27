import { pikaLoader } from "../loaders/Loaders.js";

let addOpenListenerAtCard = (cardElement) => cardElement.addEventListener("click", (e) => cardElement.classList.toggle('open'));

export function createCards(cards, container) {

    let cardsElements = []

    for (let card of cards) {
        let cardElement = createCard(card.textCard, card.imageUrl, card.onclickAction);
        cardsElements.push(cardElement);
    }

    container.append(...cardsElements);
}

export function createGame(src, name, description, company) {
  const gameCard = document.createElement("div");
  gameCard.classList.add("card-content-game");

  const gameImg = document.createElement("img");
  gameImg.classList.add("card-content-game-img");
  gameImg.src = src;
  gameImg.alt = name;

  const gameInfo = document.createElement("div");
  gameInfo.classList.add("card-content-game-info");

  const gameTitle = document.createElement("h3");
  gameTitle.textContent = name;

  const gameDescription = document.createElement("p");
  gameDescription.textContent = description;

  const gameCompany = document.createElement("p");
  gameCompany.textContent = company;

  gameInfo.append(gameTitle, gameDescription, gameCompany);
  gameCard.append(gameImg, gameInfo);

  return gameCard;
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
