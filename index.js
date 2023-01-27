import { footlightApiUrl } from "./footlightApi.js";
import "./events/event-vignette.js";

upcomingEvents();

function upcomingEvents() {
  const vignettesSections = document.querySelectorAll(".event-list");
  vignettesSections.forEach( async function (vignetteSection) {
    let query = footlightApiUrl
    if (vignetteSection.dataset.param) {
      query += vignetteSection.dataset.param
    }
    const res = await fetch(query);
    const json = await res.json();
    console.log(json);
    
    json.data.forEach((event) => {
      const el = document.createElement("event-vignette");
      el.event = event;
      vignetteSection.appendChild(el);
    });
  });
  
}
