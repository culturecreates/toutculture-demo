export const offer = (offers) => {
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