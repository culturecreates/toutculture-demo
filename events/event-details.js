import { footlightApiEventDetails } from "../footlightApi.js";
import "./event-detail-vignette.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const eventDetailsUrl =
  footlightApiEventDetails + "/" + urlParams.get("eventId") + "?include-json-ld=true";

eventDetails(eventDetailsUrl);

async function eventDetails(eventDetailsUrl) {
  const res = await fetch(eventDetailsUrl);
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("main");
  const el = document.createElement("event-detail-vignette");
  el.details = json.data;
  main.appendChild(el);
}
