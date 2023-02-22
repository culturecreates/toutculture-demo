import { concepts } from "../utils/concepts.js";



class PersonDetailVig extends HTMLElement {
  set details(person) {
    this.innerHTML = `
    <div>
    <div class="box"><img src="${person.image.thumbnail || ""}"></div>

    <h3> ${person.name.fr || person.name.en} </h3>

    <p> <b>Type:</b> ${concepts(person.additionalType)} </p>
 
    <p> <b>Description:</b> ${person.description.fr || person.description.en }
    </div>`;
  }
}

customElements.define("person-detail-vignette", PersonDetailVig);


