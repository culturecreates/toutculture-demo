export const concepts = (types) => {
  var html = "";
  if (types && types.length > 0) {
    html += "<ul>";
    types.forEach((type) => {
      html += `<li>${type.name.en || type.name.fr} (${type.id})`;
    });
    html += "</ul>";
  }
  return html;
};
