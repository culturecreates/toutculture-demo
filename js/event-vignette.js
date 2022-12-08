import { eventStatus } from "./utils/event-status.js";
import { upcoming } from "./utils/event-upcoming.js";
import { additionalType } from "./utils/event-additional-type.js";
import { displayList } from "./utils/bilingual-array.js";

class EventVignette extends HTMLElement {
  set event(event) {
    this.innerHTML = `
    <div>
    <div class="box"><img src="${event.image.thumbnail.uri || ""}"></div>
    <h3> ${event.name.fr || event.name.en}  ${eventStatus(
      event.eventStatus
    )} ${this.attendanceMode(event.eventAttendanceMode)}</h3>
    <p> ${displayList(event.location)}  </p>
    <p> ${this.dateFormat(event)} ${upcoming(event.subEventDetails)}</p>
    <p> ${this.offer(event.offers)} </p>
    <p> ${additionalType(event.additionalType)} </p>
    </div>`;
  }

  attendanceMode(mode) {
    var html = "";
    if (mode === "MixedEventAttendanceMode") {
      html = "AUSSI EN SPECTACLE VIRTUEL";
    } else if (mode === "OnlineEventAttendanceMode") {
      html = "SPECTACLE VIRTUEL";
    }
    return `<br><span style='color: red;'>${html}</span>`;
  }

  dateFormat(event) {
    var html = "";
    html += new Date(event.startDate).toLocaleString("fr-FR", {
      dateStyle: "long",
      timeStyle: "short",
      hour12: false,
      timeZone: "EST"
    });
    if (event.endDate) {
      html +=
        "<br>--> " +
          new Date(event.endDate).toLocaleString("fr-FR", {
            dateStyle: "long",
            timeStyle: "short",
            hour12: false,
            timeZone: "EST"
          }) || "";
    }
    return html;
  }

  offer(offers) {
    var html = "";
    if (offers) {
      offers.forEach((offer) => {
        if (offer.url) {
          html += `<a href="${offer.url}">Ticket URL</a>`;
        }
        if (offer.price != null && offer.type === "Offer") {
          html += `<br>Price: $${offer.price}`;
          if (offer.name.fr !== "" && offer.name.en !== "") {
            html += ` - ${offer.name.fr || offer.name.en}`;
          }
        }
        if (offer.price === 0 && offer.type === "AggregateOffer") {
          html += ` <span style='color: red;'>FREE</span>`;
        }
      });
    }
    return html;
  }
}

customElements.define("event-vignette", EventVignette);
