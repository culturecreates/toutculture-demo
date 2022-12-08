import { footlightApiUrl } from "./footlightApi.js";
import "./event-vignette.js";

console.log(footlightApiUrl);

upcomingEvents();

async function upcomingEvents() {
  const res = await fetch(footlightApiUrl);
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("main");
  json.data.forEach((event) => {
    const el = document.createElement("event-vignette");
    el.event = event;
    main.appendChild(el);
  });
}
