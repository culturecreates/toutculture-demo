  import { eventStatus } from "./event-status.js";
  import { concepts } from "../utils/concepts.js";
  import { displayList } from "../utils/bilingual-array.js";
  import { attendanceMode } from "./event-attendance-mode.js";
  import { dateFormat } from "../utils/date-format.js";
  import { offer } from "./event-offer.js";
  
  class EventDetailVig extends HTMLElement {
    set details(event) {
      this.innerHTML = `
      <div>
      <div class="box"><img src="${event.image.thumbnail || ""}"></div>
      <p>edit in <a href="https://oldcms.footlight.io/admin/add-event/?id=${event.id}">oldcms<a></p>
      <h3> ${event.name.fr || event.name.en}  ${eventStatus(
        event.eventStatus
      )} ${attendanceMode(event.eventAttendanceMode)}</h3>
      <p> ${displayList(event.location)}  </p>
      <p> ${dateFormat(event)} </p>
      <p> ${offer(event.offers)} </p>
      <p> <b>Type:</b> ${concepts(event.additionalType)} </p>
      <p> <b>Audience:</b> ${concepts(event.audience)} </p>
      <p> <b>Description:</b> ${event.description.fr || event.description.en }
      </div>`;
    }
  }
  
  customElements.define("event-detail-vignette", EventDetailVig);
  
  
  