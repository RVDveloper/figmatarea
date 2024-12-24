window.onload = () => {
    // getYearResults();

}


/*

! AÑOS

 *1983 - 4
 *2002 - 2
 *2003 - 2 
*1990 - 1
 *2005 - 1

*/

async function getYearResults() {
    try {
        
        const results = await fetchData("https://retro.gg/api/search/games/super%20mario");

        const loader = document.getElementsByClassName("loader")[0];
        loader.remove();
        
        console.log(results);

    } catch (e) {
        handleError(e);     
    }
}

function createCards() {
    
}





function handleError(e) {
    const errorImg = document.createElement("img");
    errorImg.setAttribute("src", "https://i.gifer.com/XLIH.gif");

    const messageError = document.createElement("p");
    messageError.textContent = e.message;
    messageError.classList.add("errorMessage"); 

    const resultsSection= document.getElementsByClassName("results-section")[0];
    resultsSection.append(errorImg, messageError);
}


async function fetchData(url) {

    const apiKey = "9dd92897-d4c8-4568-b1e8-1ed9cf2ade80";
    const response = await fetch(url + `?key=${apiKey}`);

    if(response.status === 429) throw new RangeError(`Error, too many requests have been made in too short a time ${response.status}`)
    if(!response.ok) throw new Error(`An error occurred while loading your page: ${response.status}`);

    const { results } = await response.json();

    return results;

}



