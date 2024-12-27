import { createCards, createGame } from '../shared/components/cards/Cards.js'
import { fetchData, handleFetchError, cleanFetchResults } from "../shared/utils/api/ApiUtils.js";


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

