import { footlightApiPlaceDetails } from "../footlightApi.js";
import "./place-detail-vignette.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const placeDetailsUrl =
footlightApiPlaceDetails + "/" + urlParams.get("placeId");

eventDetails(placeDetailsUrl);

async function eventDetails(placeDetailsUrl) {
  const res = await fetch(placeDetailsUrl);
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("main");
  const el = document.createElement("place-detail-vignette");
  el.details = json.data;
  main.appendChild(el);
}