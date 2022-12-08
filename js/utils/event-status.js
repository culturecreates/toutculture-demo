export const eventStatus = (status) => {
  if (status !== "EventScheduled") {
    return ` - <span style='color: red;'>${status}</span> `;
  } else {
    return "";
  }
};