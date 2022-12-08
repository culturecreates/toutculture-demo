import { footlightApiPlacesUrl } from "./footlightApi.js";


places();

async function places() {
  const res = await fetch(footlightApiPlacesUrl);
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("main");
  json.data.forEach((place) => {
    
    const el = document.createElement("div" );
    el.innerHTML = `${place.name.fr} <br>Events: ${place.eventCount}<br>Geo: ${place.geo.latitude}, ${place.geo.longitude}`;
    main.appendChild(el);
  });
}
