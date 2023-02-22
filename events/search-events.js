import { footlightApiUrl } from "../footlightApi.js";
import "./event-vignette.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const eventSearchUrl = footlightApiUrl + "&query=" + urlParams.get("query");
console.log(eventSearchUrl);

eventDetails(eventSearchUrl);

async function eventDetails(eventSearchUrl) {
  const res = await fetch(eventSearchUrl);
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("main");
  json.data.forEach((event) => {
    const el = document.createElement("event-vignette");
    el.event = event;
    main.appendChild(el);
  });
}
