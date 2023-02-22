export const generateEnvironmentEditLink = (event) => {
  if (!event.image) {
    return "";
  }
  if (event.image.thumbnail.startsWith("https://cdn.")) {
    return `edit in <a href="https://oldcms.footlight.io/admin/add-event/?id=${event.id}">oldcms<a></a>`;
  } else {
    return `edit in <a href="http://staging.oldcms.footlight.io/admin/add-event/?id=${event.id}">oldcms<a></a>`;
  }
 
}