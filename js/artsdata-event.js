class ArtsdataEvent extends HTMLElement {
  set event(event) {
    this.innerHTML = `<div>
   
    <div class="box"><img src="${ event.image.thumbnail.uri || '' }"></div>
    <h3> ${ event.name.fr|| event.name.en}  ${ this.eventStatus(event.eventStatus) }</h3>
    <p> ${ this.location(event.location) }  </p>
    <p> ${ this.dateFormat(event) } ${this.upcoming(event.subEventDetails) }</p>
    <p> ${ this.offer(event.offers) } </p>
    <p> ${ this.additionalType(event.additionalType) } </p>
    </div>`
  }

  eventStatus(eventStatus) {
    if (eventStatus != "EventScheduled")  {
      return ` - <span style='color: red;'>${eventStatus}</span> ` ;
    }  else {
      return ""
    }
  }

  upcoming(details) {
    if (details.upcomingSubEventCount > 0 ) {
      return `<br>${details.upcomingSubEventCount}/${details.totalSubEventCount} events remaining`
    } else {
      return ""
    }
  }
  

  additionalType(types) {
    var html = ""
    if (types.length > 0) {
      html += "Types: "
      html += "<ul>"
      types.forEach(type => {
        html += `<li>${type.name.fr || type.name.en }`
    })
    html += "</ul>"
  }
    return html;
  }

  attendanceMode(mode) {
    var html = ""
    if (mode == "MixedEventAttendanceMode") {
      html = "AUSSI EN SPECTACLE VIRTUEL"
    }
    else if (mode == "OnlineEventAttendanceMode") {
      html = "SPECTACLE VIRTUEL"
    }
    return `<span style='color: red;'>${html}</span>`
  }

  dateFormat(event) {
    var html = ""
    html +=  new Date(event.startDate).toLocaleString('fr-FR',  { dateStyle: 'long', timeStyle: 'short', hour12: false, timeZone: 'EST' }) 
    if (event.endDate) {
      html +=  '<br>--> ' + new Date(event.endDate).toLocaleString('fr-FR',  { dateStyle: 'long', timeStyle: 'short', hour12: false, timeZone: 'EST' }) || ''
    }
    return html
  }

  offer(offers) {
    var html = "";
    if (offers) {
    offers.forEach(offer => {
      if (offer.url) {
        html +=`<a href="${offer.url}">Ticket URL</a>`
      }
      if (offer.price != null && offer.type == 'Offer') {
        html +=`<br>Price: $${offer.price}` ;
        if  ( offer.name.fr != "" &&  offer.name.en != "" ) {
          html += ` - ${offer.name.fr || offer.name.en }`  ;
        }
      }
      if (offer.price == '0' && offer.type == 'AggregateOffer') {
        html +=` <span style='color: red;'>FREE</span>`
      }
     })
    }
     return html;
  }

  location(locations) {
    var html = ""
    locations.forEach(location => {
      if (location.name.fr) {
        html +=`${location.name.fr || location.name.en}`
      }
     
     })
     return html;
  }
}


customElements.define('artsdata-event', ArtsdataEvent)