export const attendanceMode = (mode) => {
  var html = "";
  if (mode === "MixedEventAttendanceMode") {
    html = "AUSSI EN SPECTACLE VIRTUEL";
  } else if (mode === "OnlineEventAttendanceMode") {
    html = "SPECTACLE VIRTUEL";
  }
  return `<br><span style='color: red;'>${html}</span>`;
}