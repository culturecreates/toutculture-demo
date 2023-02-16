export const dateFormat = (event) => {
  const formatter = new Intl.DateTimeFormat("fr-CA", {
    // dateStyle: 'long',
    // timeStyle: 'short',
    hour: "numeric",
    hour12: false,
    minute: "numeric",
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "America/Montreal",
  });

  var html = "";
  if (event.startDate) {
    html += `DATE: ${event.startDate}`;
  }

  if (event.startDateTime) {
    html += "DATE-TIME: ";
    html += formatter.format(new Date(event.startDateTime));
  }

  if (event.endDate) {
    html += `<br>--> DATE: ${event.endDate}`;
  }

  if (event.endDateTime) {
    html +=
      "<br>--> DATE-TIME: " + formatter.format(new Date(event.startDateTime)) ||
      "";
  }

  return html;
};
