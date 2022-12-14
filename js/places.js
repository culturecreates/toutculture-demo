import { footlightApiPlacesUrl } from "./footlightApi.js";
import { displayList } from "./utils/bilingual-array.js";

places();

async function places() {
  const res = await fetch(footlightApiPlacesUrl);
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("ol");
  json.data.forEach((place) => {
    
    const el = document.createElement("div" );
    el.innerHTML += `<li><h2>${place.name.fr}</h2>`;
    el.innerHTML += `${place.address.streetAddress.fr}`;
    if (place.additionalType != undefined) {
      el.innerHTML += `<br>Type: ${displayList(place.additionalType)}`;
    } 
    if (place.containedInPlace != undefined) {
      el.innerHTML += `<br>ContainedInPlace: ${place.containedInPlace.name.fr}`;
    } 
    el.innerHTML += `<br>Event count: ${place.eventCount}`;



    el.innerHTML += `<br>Geo: ${place.geo.latitude}, ${place.geo.longitude}`;
    el.innerHTML += `</li>`
    main.appendChild(el);
  });
}
