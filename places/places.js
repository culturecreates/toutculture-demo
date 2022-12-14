import { footlightApiPlacesUrl } from "../footlightApi.js";
import "./place-vignette.js";

places();
mapPlaces();

async function places() {
  const res = await fetch(footlightApiPlacesUrl);
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("#all");
  json.data.forEach((place) => {
    const el = document.createElement("place-vignette");
    el.place = place;
    main.appendChild(el);
  });
}

async function mapPlaces() {
  // Filter by POI: Heritage building, park, museum
  const res = await fetch(footlightApiPlacesUrl
    + "&concept-ids=638a3eccd8957a0059fdcd43"
    + "&concept-ids=638a3eccd8957a0059fdcd41"
    + "&concept-ids=638a3eccd8957a0059fdcd45");
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("#map");
  json.data.forEach((place) => {
    const el = document.createElement("place-vignette");
    el.place = place;
    main.appendChild(el);
  });
}
