import { footlightApiOrgDetails } from "../footlightApi.js";
import "./org-detail-vignette.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const orgDetailsUrl =
footlightApiOrgDetails + "/" + urlParams.get("orgId");

eventDetails(orgDetailsUrl);

async function eventDetails(orgDetailsUrl) {
  const res = await fetch(orgDetailsUrl);
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("main");
  const el = document.createElement("org-detail-vignette");
  el.details = json.data;
  main.appendChild(el);
}