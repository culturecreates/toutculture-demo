import { footlightApiUrl } from  "../footlightApi.js";

export const generateEnvironmentEditLink = (event) => {

  if (footlightApiUrl.startsWith("https://api.footlight.io") ) {
    return `edit in <a href="https://oldcms.footlight.io/admin/add-event/?id=${event.id}">oldcms<a></a>`;
  } else {
    return `edit in <a href="http://staging.oldcms.footlight.io/admin/add-event/?id=${event.id}">oldcms<a></a>`;
  }
 
}