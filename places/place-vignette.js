import { displayList } from "../utils/bilingual-array.js";

class PlaceVignette extends HTMLElement {
  set place(place) {
    this.innerHTML = `
    <li>
    <h2><a href="place-details.html?placeId=${place.id}">${place.name.fr || place.name.en}</a></h2>
    en: ${place.name.en || ""}
    <br>fr: ${place.name.fr || ""}
    <br>address: ${place?.address?.streetAddress?.fr || "" }
    <br>Type: ${displayList(place.additionalType)}
    <br>ContainedInPlace: ${place?.containedInPlace?.name?.fr || ""}
    <br>Event count: ${place.eventCount}
    <br>Geo: ${place.geo.latitude || ""}  ${place.geo.longitude}
    </li>
    `;
  }
}

customElements.define("place-vignette", PlaceVignette);