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
  const res = await fetch(footlightApiPlacesUrl + "&concept=63bf164443d51e00705e349e");
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("#map");
  json.data.forEach((place) => {
    const el = document.createElement("place-vignette");
    el.place = place;
    main.appendChild(el);
  });
}
