import { createCards } from "/src/shared/components/cards/Cards.js";
import { fetchData, handleFetchError } from "/src/shared/utils/api/ApiUtils.js";

const yearCards = [
  {
    textCard: "1983",
    imageUrl: "https://cdn-image-f3580964b8e711e5b95f2ff191a1c838.baas.nintendo.com/1/512fd2f77a8cf50d",
    onclickAction: OnClickAction
  },
  {
    textCard: "2002",
    imageUrl: "https://wallpapers.com/images/high/kirby-background-4ezg46zuv4zat56g.webp",
    onclickAction: OnClickAction
  },
  {
    textCard: "2003",
    imageUrl: "https://www.gamewallpapers.com/wallpapers_slechte_compressie/wallpaper_kingdom_hearts_2_01_1680x1050.jpg",
    onclickAction: OnClickAction
  },
  {
    textCard: "1990",
    imageUrl: "https://wallpapers.com/images/featured-full/street-fighter-x5ob0a3clmiw8mjm.jpg",
    onclickAction: OnClickAction
  },
  {
    textCard: "2005",
    imageUrl: "https://i.pinimg.com/originals/3f/a3/76/3fa3764bc368338df060afbe901b8478.jpg",
    onclickAction: OnClickAction
  },
];

window.onload = () => {
  const resultsSection = document.getElementsByClassName("results-section")[0];
  createCards(yearCards, resultsSection);
};

function OnClickAction(e) {
  e.stopPropagation();
  
  const year = e.currentTarget.firstElementChild.querySelector(".card-title").innerHTML;
  const cardInfo = e.currentTarget.lastElementChild;

  if (e.currentTarget.classList.contains("open")) {
    getYearResults(cardInfo, year);
  }
}

async function getYearResults(cardInfo, year) {
  try {
    const results = await fetchData(`https://retro.gg/api/search/year/${year}`);
    cardInfo.innerHTML = ""; 
    createGames(results, cardInfo);

  } catch (err) {
    handleFetchError(err, "15%", cardInfo);
  }
}

function createGames(fetchResults, container) {
  const cleanData = cleanFetchResults(fetchResults);

  const fragment = document.createDocumentFragment();
  
  cleanData.forEach((game) => {
    const gameCard = createGame(game.cover, game.name, game.description, game.company);
    fragment.appendChild(gameCard);
  });
  
  container.appendChild(fragment);
}

function createGame(src, name, description, company) {
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

function cleanFetchResults(fetchResults) {
  return fetchResults.map((game) => {
    const { cover, name, description, companies } = game;
    const company = companies?.[0]?.name || "Unknown";
    return { cover, name, description, company };
  });
}
