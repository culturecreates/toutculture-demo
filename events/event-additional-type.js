export const additionalType = (types) => {
  var html = "";
  if (types.length > 0) {
    html += "Types: ";
    html += "<ul>";
    types.forEach((type) => {
      html += `<li>${type.name.fr || type.name.en}`;
    });
    html += "</ul>";
  }
  return html;
};
