import { displayList } from "../utils/bilingual-array.js";

class OrgVignette extends HTMLElement {
  set org(org) {
    this.innerHTML = `
    <li>
    <h2>${org.name.fr}</h2>
    ${org?.place?.address?.streetAddress?.fr || ""}
    <br>Type: ${displayList(org.additionalType)}
    </li>
    `;
  }
}

customElements.define("org-vignette", OrgVignette);