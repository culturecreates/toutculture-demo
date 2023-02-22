import { concepts } from "../utils/concepts.js";



class PersonDetailVig extends HTMLElement {
  set details(person) {
    let conceptChoices = "";
    if (person.taxonomyMap) {
      person.taxonomyMap.forEach((taxonomy) => {
        conceptChoices += concepts(person[taxonomy.id]) ;
      });
    }

    this.innerHTML = `
    <div>


    <h3> ${person.name?.fr || person.name?.en} </h3>

    
    <div class="box"><img src="${person.image?.thumbnail || ""}"></div>

    <p> <b>Type:</b> ${concepts(person.additionalType)} </p>

    <p><b>Custom Taxonomies:</b> ${concepts(person.taxonomyMap)} </p>
    <p><b>Selected Concepts:</b>  ${conceptChoices}</p>
 
    <p> <b>Description:</b> ${person.description?.fr || person.description?.en }
    </div>`;
  }
}

customElements.define("person-detail-vignette", PersonDetailVig);


