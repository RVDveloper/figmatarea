import { fetchData, handleFetchError } from "/src/shared/utils/api/ApiUtils.js";

window.onload = () => {
    getYearResults();

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


    } catch (e) {
        handleFetchError(e, "https://i.gifer.com/XLIH.gif", "17%");     
    }

}

// function createCards() {
    
// }






