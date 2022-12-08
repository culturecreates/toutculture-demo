import { footlightApiPlacesUrl } from "./footlightApi.js";
import { displayList } from "./utils/bilingual-array.js";

places();

async function places() {
  const res = await fetch(footlightApiPlacesUrl);
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("main");
  json.data.forEach((place) => {
    
    const el = document.createElement("div" );
    if (place.additionalType != undefined) {
      el.innerHTML = `<h2>${place.name.fr}</h2> <br> ${displayList(place.additionalType)} <br>Events: ${place.eventCount}<br>Geo: ${place.geo.latitude}, ${place.geo.longitude}`;

    } else {
      el.innerHTML = `<h2>${place.name.fr}</h2>  <br>Events: ${place.eventCount}<br>Geo: ${place.geo.latitude}, ${place.geo.longitude}`;
    }
    main.appendChild(el);
  });
}
