export const displayList = (list) => {
  var html = "";
  list.forEach((item) => {
    html += `${item.name.fr || item.name.en || ""}   `;
  });
  return html;
};
