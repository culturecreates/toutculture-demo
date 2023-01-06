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
  const res = await fetch(footlightApiPlacesUrl + "&concept-ids=63b861f21c6b6c005aad483b");
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("#map");
  json.data.forEach((place) => {
    const el = document.createElement("place-vignette");
    el.place = place;
    main.appendChild(el);
  });
}
