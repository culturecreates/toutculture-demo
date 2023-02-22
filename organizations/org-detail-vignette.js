import { concepts } from "../utils/concepts.js";

class OrgDetailVig extends HTMLElement {
  set details(org) {
    this.innerHTML = `
    <h3> ${org.name.fr || org.name.en} </h3>
    <div>
    Image:
    <div class="box"><img src="${org.image?.thumbnail || ""}"></div>
    Logo: 
    <div class="box"><img src="${org.logo?.thumbnail || ""}"></div>
    <p> <b>Type:</b> ${concepts(org.additionalType)} </p>
 
    <p> <b>Description:</b> ${org.description.fr || org.description.en || ""  }
    </div>`;
  }
}

customElements.define("org-detail-vignette", OrgDetailVig);


