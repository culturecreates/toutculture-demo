
  export const dateFormat = (event) => {
    var html = "";
    html += new Date(event.startDate).toLocaleString("fr-FR", {
      dateStyle: "medium",
      timeStyle: "short",
      hour12: false,
      timeZone: "EST"
    });
    if (event.endDate) {
      html +=
        "<br>--> " +
          new Date(event.endDate).toLocaleString("fr-FR", {
            dateStyle: "medium",
            timeStyle: "short",
            hour12: false,
            timeZone: "EST"
          }) || "";
    }
    return html;
  }