import "./styles.css";

const entryContainer = document.querySelector(".container");

const createEntry = async (dogBreed, wikiTitle) => {
  const breedImage = await fetchImage(dogBreed);
  const breedSummary = await fetchSummary(wikiTitle);

  const entry = document.createElement("div");
  entry.classList.add("entry");

  const image = document.createElement("img");
  image.setAttribute("src", breedImage.message);
  image.setAttribute("alt", dogBreed);

  const summary = document.createElement("p");
  summary.textContent = breedSummary.extract;

  entry.appendChild(image);
  entry.appendChild(summary);

  entryContainer.appendChild(entry);
};

const fetchImage = async (breed) => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random`
  );
  return response.json();
};

const fetchSummary = async (wikiTitle) => {
  const response = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${wikiTitle.toLowerCase()}`
  );
  return response.json();
};

createEntry("Bouvier", "Bouvier_des_Flandres");
createEntry("Bulldog", "Bulldog");
createEntry("Dachshund", "Dachshund");
createEntry("Shiba", "Shiba_(dog)");
createEntry("Boxer", "Boxer_(dog)");
