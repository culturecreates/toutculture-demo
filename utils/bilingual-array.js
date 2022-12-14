export const displayList = (list) => {
  var html = "";
  if (list != undefined) {
    list.forEach((item) => {
      html += `${item.name.fr || item.name.en || ""}   `;
    });
  
  }

  return html;
};
