
  export const dateFormat = (event) => {
    var html = "";
    if (event.startDate) {
      html += `DATE: ${event.startDate}`;
    }

    if (event.startDateTime) {
      html += "DATE-TIME: ";
      html += new Date(event.startDateTime).toLocaleString("fr-FR", {
        dateStyle: "medium",
        timeStyle: "short",
        hour12: false,
        timeZone: "EST"
      });
    }

    if (event.endDate) {
      html +=
        `<br>--> DATE: ${event.endDate}`
    }

    if (event.endDateTime) {
      html +=
        "<br>--> DATE-TIME: " +
          new Date(event.endDate).toLocaleString("fr-FR", {
            dateStyle: "medium",
            timeStyle: "short",
            hour12: false,
            timeZone: "EST"
          }) || "";
    }


    return html;
  }