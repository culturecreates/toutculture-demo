import { footlightApiUrl } from  "../footlightApi.js";

export const generateEnvironmentEditLink = (event) => {

  if (footlightApiUrl.startsWith("https://api.footlight.io") ) {
    return `edit in <a href="https://cms.footlight.io/dashboard/6308ef4a7f771f00431d939a/events/add-event/${event.id}">new cms</a>`;
  } else {
    return `edit in <a href="https://staging.cms.footlight.io/dashboard/6308ef4a7f771f00431d939a/events/add-event/${event.id}">new cms</a>`;
  }
 
}