import { eventStatus } from "./event-status.js";
import { upcoming } from "./event-upcoming.js";
import { additionalType } from "./event-additional-type.js";
import { displayList } from "../utils/bilingual-array.js";
import { attendanceMode } from "./event-attendance-mode.js";
import { dateFormat } from "../utils/date-format.js";
import { offer } from "./event-offer.js";

class EventVignette extends HTMLElement {
  set event(event) {
    this.innerHTML = `
    <div>
    <div class="box"><img src="${event.image.thumbnail.uri || ""}"></div>
    <h3> ${event.name.fr || event.name.en}  ${eventStatus(
      event.eventStatus
    )} ${attendanceMode(event.eventAttendanceMode)}</h3>
    <p> ${displayList(event.location)}  </p>
    <p> ${dateFormat(event)} ${upcoming(event.subEventDetails)}</p>
    <p> ${offer(event.offers)} </p>
    <p> ${additionalType(event.additionalType)} </p>
    </div>`;
  }
}

customElements.define("event-vignette", EventVignette);
