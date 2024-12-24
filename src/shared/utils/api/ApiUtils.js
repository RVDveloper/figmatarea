import { apiKey } from "/src/shared/constants/ApiKey.js";


export async function fetchData(url) {

    const response = await fetch(url + `?key=${apiKey}`);

    if(response.status === 429) throw new RangeError(`Error, too many requests have been made in too short a time ${response.status}`)
    if(!response.ok) throw new Error(`An error occurred while loading your page: ${response.status}`);

    const { results } = await response.json();

    return results;

}

export function handleFetchError(e, src, imageWidth) {

    const resultsSection= document.getElementsByClassName("results-section")[0];
    resultsSection.innerHTML = "";

    const errorImg = document.createElement("img");
    errorImg.setAttribute("src", src);
    errorImg.setAttribute("width", imageWidth);

    const messageError = document.createElement("p");
    messageError.textContent = e.message;
    messageError.classList.add("errorMessage"); 

    resultsSection.append(errorImg, messageError);
}


