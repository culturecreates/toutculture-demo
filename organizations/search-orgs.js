import { footlightApiOrganizationsUrl } from "../footlightApi.js";
import "./org-vignette.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// const eventSearchUrl = footlightApiUrl + "&query=" + urlParams.get("query");
const orgSearchUrl = footlightApiOrganizationsUrl + "&" + urlParams.toString();

console.log(orgSearchUrl);

async function orgDetails(orgSearchUrl) {
  const res = await fetch(orgSearchUrl);
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
  
  json.data.forEach((org) => {
    const el = document.createElement("org-vignette");
    el.org = org;
    main.appendChild(el);
  });
}

orgDetails(orgSearchUrl);
