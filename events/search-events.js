import { footlightApiUrl } from "../footlightApi.js";
import "./event-vignette.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// const eventSearchUrl = footlightApiUrl + "&query=" + urlParams.get("query");
const eventSearchUrl = footlightApiUrl + "&" + urlParams.toString();

console.log(eventSearchUrl);

async function eventDetails(eventSearchUrl) {
  const res = await fetch(eventSearchUrl);
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("main");
  const displayQuery = document.querySelector("query");
  displayQuery.innerHTML = urlParams.get("query") || "All"
  if (urlParams.get("start-date-range") && !urlParams.get("end-date-range")) {
    displayQuery.innerHTML += " starting " + urlParams.get("start-date-range")
  }
  if (urlParams.get("start-date-range") && urlParams.get("end-date-range")) {
    displayQuery.innerHTML += " between " + urlParams.get("start-date-range") + " - " + urlParams.get("end-date-range");
  }
  
  json.data.forEach((event) => {
    const el = document.createElement("event-vignette");
    el.event = event;
    main.appendChild(el);
  });
}

eventDetails(eventSearchUrl);
