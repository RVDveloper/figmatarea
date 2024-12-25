import { apiKey } from "/src/shared/constants/ApiKey.js";
import { fetchFailedItem } from "/src/shared/components/loaders/Loaders.js";

export async function fetchData(url) {
  const response = await fetch(url + `?key=${apiKey}`);

  if (!response.ok)
    throw new Error(`An error occurred while loading your page: ${response.status}`);

  const { results } = await response.json();

  return results;
}

export function handleFetchError(err, imageWidth, container) {

  container.innerHTML = "";
  const messageError = document.createElement("p");

  container.style.cssText = "display: flex; flex-direction: column; justify-content: center; align-items: center;";

  messageError.textContent =
    err instanceof TypeError && err.message.includes("NetworkError")
      ? "Error, too many requests have been made in too short a time - 429"
      : err.message;

  container.append(fetchFailedItem(imageWidth, false), messageError);
}


export function cleanFetchResults(fetchResults) {
  return fetchResults.map((game) => {
    const { cover, name, description, companies, header } = game;
    const company = companies?.[0]?.name || "Unknown";
    return { cover, name, description, company, header };
  });
}
