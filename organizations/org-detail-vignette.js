import { concepts } from "../utils/concepts.js";

class OrgDetailVig extends HTMLElement {
  set details(org) {
    let conceptChoices = "";
    if (org.taxonomyMap) {
      org.taxonomyMap.forEach((taxonomy) => {
        conceptChoices += concepts(org[taxonomy.id]);
      });
    }
    
    this.innerHTML = `
    <h3> ${org.name?.fr || org.name?.en} </h3>
    <div>
    Image:
    <div class="box"><img src="${org.image?.thumbnail || ""}"></div>
    Logo: 
    <div class="box"><img src="${org.logo?.thumbnail || ""}"></div>
    <p> <b>Type:</b> ${concepts(org.additionalType)} </p>

    <p><b>Custom Taxonomies:</b> ${concepts(org.taxonomyMap)} </p>
    <p><b>Selected Concepts:</b>  ${conceptChoices}</p>

 
    <p> <b>Description:</b> ${org.description?.fr || org.description?.en || ""  }
    </div>`;
  }
}

customElements.define("org-detail-vignette", OrgDetailVig);


