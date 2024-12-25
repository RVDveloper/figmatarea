function createInformativeItem(src, width, centerInCard) {

    const loader = document.createElement("img");

    loader.setAttribute("src", src); 
    loader.setAttribute("width", width)

    let centerInCardStyle = "position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%);";
    loader.style.cssText = (centerInCard) ? centerInCardStyle: "";

    return  loader;
}


export const pikaLoader = (width, centerInCard = true) => createInformativeItem("https://i.gifer.com/2iiJ.gif", width, centerInCard);
export const fetchFailedItem = (width, centerInCard = true) => createInformativeItem("https://i.gifer.com/XLIH.gif", width, centerInCard);

