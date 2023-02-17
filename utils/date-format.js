export const dateFormat = (event) => {

  const dateTimeOptions = { 
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const locale = "fr-QC";

  const dateTimeFormatter = new Intl.DateTimeFormat(locale, {
    ...dateTimeOptions,
    timeZone: "America/Montreal",
  });

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    ...dateTimeOptions,
    timeZone: "UTC",
  });

  var html = "";
  if (event.startDate) {
    html += `DATE: ${dateFormatter.format(new Date(event.startDate))}`;
  }

  if (event.startDateTime) {
    html += `DATE-TIME: ${dateTimeFormatter.format(new Date(event.startDateTime))}`;
  }

  if (event.endDate) {
    html += `<br>--> DATE: ${dateFormatter.format(new Date(event.endDate))}`;
  }

  if (event.endDateTime) {
    html +=
      `<br>--> DATE-TIME: ${dateTimeFormatter.format(new Date(event.endDateTime))}`;
  }

  return html;
};
