import { concepts } from "../utils/concepts.js";
import { displayList } from "../utils/bilingual-array.js";

class PlaceDetailVig extends HTMLElement {
  set details(place) {
    let concept = "";

    place.taxonomyMap.forEach((taxonomy) => {
      concept += concepts(place[taxonomy.id]);
    });

    this.innerHTML = `
    <div>
    <h2> ${place.name.fr || place.name.en} </h2>

    en: ${place.name.en || ""}
    <br>
    fr: ${place.name.fr || ""}
    <div class="box"><img src="${place.image?.thumbnail || ""}"></div>

    <p><b>Address:</b> ${
      place.address?.streetAddress?.fr || place.address?.streetAddress?.en
    }</p>

    <p><b>Type:</b> ${displayList(place.additionalType)}</p>

    <p><b>Custom Taxonomies:</b> ${concepts(place.taxonomyMap)} </p>
    <p><b>Custom Concepts:</b>  ${concept}</p>

    <p><b>ContainedInPlace:</b> ${place?.containedInPlace?.name?.fr || ""}</p>

    <p><b>Geo:</b> ${place.geo.latitude || ""}  ${place.geo.longitude}</p>
 
    <p> <b>Description:</b> ${
      place.description.fr || place.description.en || ""
    }
    </div>`;
  }
}

customElements.define("place-detail-vignette", PlaceDetailVig);
