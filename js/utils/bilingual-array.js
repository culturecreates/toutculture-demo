export const displayList = (list) => {
  var html = "";
  list.forEach((item) => {
    html += `${item.name.fr || item.name.en || ""}<br>`;
  });
  return html;
};
