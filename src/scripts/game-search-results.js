import {createCards,createGame } from "/src/shared/components/cards/Cards.js";
import { pikaLoader } from "/src//shared/components/loaders/Loaders.js";
import {cleanFetchResults, fetchData,handleFetchError, } from "/src/shared/utils/api/ApiUtils.js";

window.onload = () => {
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", searchGame);
};

async function searchGame(e) {
  const input = document.getElementById("search-input");
  const resultsSection = document.getElementsByClassName("results-section")[0];

  if (input.value == "") {
    input.style = "border: 2px solid red;";
    return;
  }

  resultsSection.innerHTML = "";
  resultsSection.append(pikaLoader("15%", false));

  try {

    let data = await fetchData(`https://retro.gg/api/search/games/${input.value}`);
    if (data.length <= 0) throw new Error("Game not found!");
    createResultsCards(data, resultsSection);

  } catch (err) {
    handleFetchError(err, "15%", resultsSection);
  }
}

function createResultsCards(data, container) {

  container.innerHTML = "";
  const cleanedData = cleanFetchResults(data);

  const OnClickAction = (e) => {

    const cardInfo = e.currentTarget.lastElementChild;
    const gameName = e.currentTarget.firstElementChild.querySelector(".card-title").innerHTML;

    cardInfo.innerHTML = "";

    if (e.currentTarget.classList.contains("open")) {

        const [ game ] = cleanedData.filter((game) => game.name == gameName);
        const gameElement = createGame(game.cover,game.name, game.description,game.company);
        cardInfo.appendChild(gameElement);
    }

  };

  const parseToCreatable = cleanedData.map((gameData) => {
    const { header, name } = gameData;
    return { textCard: name, imageUrl: header, onclickAction: OnClickAction };
  });

  createCards(parseToCreatable, container);
}


