import { displayList } from "../utils/bilingual-array.js";

class PersonVignette extends HTMLElement {
  set person(person) {
    this.innerHTML = `
    <li>
    <h2><a href="/people/person-details.html?personId=${person.id}">${person.name.en || person.name.fr}</a></h2>
    en: ${person.name.en || ""}
    <br>
    fr: ${person.name.fr || ""}
    <br>Type: ${displayList(person.additionalType)}
    </li>
    `;
  }
}

customElements.define("person-vignette", PersonVignette);