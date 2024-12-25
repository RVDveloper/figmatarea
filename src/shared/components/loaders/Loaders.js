function createInformativeItem(src, width, alt) {

    const loader = document.createElement("img");

    loader.setAttribute("src", src); 
    loader.setAttribute("width", width)
    loader.setAttribute("alt", alt);

    loader.style.cssText = "position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%);";

    return loader;
}


export const pikaLoader = (width) => createInformativeItem("https://i.gifer.com/2iiJ.gif", width, "loader");
// export const moneyLoader = (width) => createInformativeItem("https://i.gifer.com/BrxG.gif", width, "loader");
export const fetchFailedItem = (width) => createInformativeItem("https://i.gifer.com/XLIH.gif", width, "loader");

