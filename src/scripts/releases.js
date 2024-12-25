import { createCards } from "/src/shared/components/cards/Cards.js";
import { fetchData, handleFetchError } from "/src/shared/utils/api/ApiUtils.js";
import { pikaLoader } from "/src/shared/components/loaders/Loaders.js";



const yearCards = [
  {
    textCard: "1983",
    imageUrl: "",
    onclickAction: OnClickAction
  },
  {
    textCard: "2002",
    imageUrl: "",
    onclickAction: OnClickAction
  },
  {
    textCard: "2003",
    imageUrl: "",
    onclickAction: OnClickAction
  },
  {
    textCard: "1990",
    imageUrl: "",
    onclickAction: OnClickAction
  },
  {
    textCard: "2005",
    imageUrl: "",
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

  if(e.currentTarget.classList.contains("open")) getYearResults(cardInfo, year);
}


async function getYearResults(cardInfo, year) {
  try {
    const results = await fetchData(`https://retro.gg/api/search/year/${year}`);
    cardInfo.innerHTML = ""
    console.log(results);

  } catch (err) {
    handleFetchError(err, "15%", cardInfo);
  }
}
