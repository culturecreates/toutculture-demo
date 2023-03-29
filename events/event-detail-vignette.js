  import { eventStatus } from "./event-status.js";
  import { concepts } from "../utils/concepts.js";
  import { displayList } from "../utils/bilingual-array.js";
  import { attendanceMode } from "./event-attendance-mode.js";
  import { dateFormat } from "../utils/date-format.js";
  import { offer } from "./event-offer.js";
  import { generateEnvironmentEditLink } from "./event-edit-link.js";
  
  class EventDetailVig extends HTMLElement {
    set details(event) {
      let conceptChoices = "";
      if (event.taxonomyMap) {
        event.taxonomyMap.forEach((taxonomy) => {
          conceptChoices += concepts(event[taxonomy.id]);
        });
      }

      let dateOccurences = '';
      event.subEvent?.forEach((subEvent) => {
        dateOccurences += '<li>' + dateFormat(subEvent) + '</li>';
      });

      this.innerHTML = `
      <div>
      <div class="box"><img src="${event.image?.thumbnail || ""}"></div>

      <p> ${generateEnvironmentEditLink(event)}</p>
      <h3> ${event.name.fr || event.name.en}  ${eventStatus(
        event.eventStatus
      )} ${attendanceMode(event.eventAttendanceMode)}</h3>
      <p> ${displayList(event.location)}  </p>
      <p> ${dateFormat(event)} </p>
      <p> ${offer(event.offers)} </p>
      <p> <b>Type:</b> ${concepts(event.additionalType)} </p>
      <p> <b>Audience:</b> ${concepts(event.audience)} </p>

      <p><b>Custom Taxonomies:</b> ${concepts(event.taxonomyMap)} </p>
      <p><b>Selected Concepts:</b>  ${conceptChoices}</p>

      <p><b>Event Occurences:</b> <ul> ${dateOccurences} </ul> </p>
   

      <p> <b>Description:</b> ${event.description?.fr || event.description?.en }
      </div>`;

      const script = document.createElement('script')
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(JSON.parse(event.jsonld));
      this.appendChild(script);
    }
  }
  
  customElements.define("event-detail-vignette", EventDetailVig);
  
  
  