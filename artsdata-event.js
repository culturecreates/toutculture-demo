class ArtsdataEvent extends HTMLElement {
  set event(event) {
    this.innerHTML = `<div>
    <a href='${ event.url ||  event.urlFr ||  event.urlEn }'>
    <h3> ${ event.nameFr }</h3></a>
    <p> ${ attendanceMode(event.eventAttendanceMode) } </p>
    <div class="box"><img src="${ event.image || '' }"></div>
    <p> ${ event.startDate || event.startDateWithoutTime } </p></div>`
  }
}

function attendanceMode(mode) {
  var modeHtml = ""
  if (mode == "MixedEventAttendanceMode") {
    modeHtml = "AUSSI EN SPECTACLE VIRTUEL"
  }
  else if (mode == "OnlineEventAttendanceMode") {
    modeHtml = "SPECTACLE VIRTUEL"
  }
  return `<span style='color: red;'>${modeHtml}</span>`
}

customElements.define('artsdata-event', ArtsdataEvent)