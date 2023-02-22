import { displayList } from "../utils/bilingual-array.js";

class OrgVignette extends HTMLElement {
  set org(org) {
    this.innerHTML = `
    <li>
    <h2><a href="org-details.html?orgId=${org.id}">${org.name.en || org.name.fr}</a></h2>
    en: ${org.name.en || ""}
    <br>
    fr: ${org.name.fr || ""}
    ${org?.place?.address?.streetAddress?.fr || ""}
    <br>Type: ${displayList(org.additionalType)}
    </li>
    `;
  }
}

customElements.define("org-vignette", OrgVignette);