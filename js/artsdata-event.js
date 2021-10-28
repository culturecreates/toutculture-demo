class ArtsdataEvent extends HTMLElement {
  set event(event) {
    this.innerHTML = `<div>
    <a href='${ event.url ||  event.urlFr ||  event.urlEn }'>
    <h3> ${ event.nameFr }</h3></a>
    <p> ${ this.attendanceMode(event.eventAttendanceMode) } </p>
    <div class="box"><img src="${ event.image || '' }"></div>
    <p> ${ this.dateFormat(event) } </p></div>`
  }

  attendanceMode(mode) {
    var modeHtml = ""
    if (mode == "MixedEventAttendanceMode") {
      modeHtml = "AUSSI EN SPECTACLE VIRTUEL"
    }
    else if (mode == "OnlineEventAttendanceMode") {
      modeHtml = "SPECTACLE VIRTUEL"
    }
    return `<span style='color: red;'>${modeHtml}</span>`
  }

  dateFormat(event) {
    return new Date(event.startDate).toLocaleString('fr-FR',  { dateStyle: 'long', timeStyle: 'short', hour12: false, timeZone: 'EST' }) || event.startDateWithoutTime
  }
}


customElements.define('artsdata-event', ArtsdataEvent)