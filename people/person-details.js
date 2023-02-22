import { footlightApiPersonDetails } from "../footlightApi.js";
import "./person-detail-vignette.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const personDetailsUrl =
footlightApiPersonDetails + "/" + urlParams.get("personId");

eventDetails(personDetailsUrl);

async function eventDetails(personDetailsUrl) {
  const res = await fetch(personDetailsUrl);
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("main");
  const el = document.createElement("person-detail-vignette");
  el.details = json.data;
  main.appendChild(el);
}