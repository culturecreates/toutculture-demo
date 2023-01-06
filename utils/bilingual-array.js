export const displayList = (list) => {
  var html = "";
  if (list != undefined) {
    list.forEach((item) => {
      if (item.name != undefined) {
      html += `${item.name.fr || item.name.en || ""}   `;
    }
    });
  
  }

  return html;
};
