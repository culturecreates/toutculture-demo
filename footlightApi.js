const baseUrl = "https://staging.api.footlight.io";
const endPoint = `${baseUrl}/calendars/tout-culture/`;
const footlightApiUrl = `${endPoint}events?page=1&limit=100`;
const footlightApiPlacesUrl = `${endPoint}places?sort=name.fr&page=1&limit=100&include-event-count=true`;
const footlightApiOrganizationsUrl = `${endPoint}organizations?sort=name.fr&page=1&limit=100`;
const footlightApiPeopleUrl = `${endPoint}people?sort=name.en&page=1&limit=100`;
const footlightApiEventDetails = `${baseUrl}/events`;
const footlightApiPersonDetails = `${baseUrl}/people`;
const footlightApiOrgDetails = `${baseUrl}/organizations`;

export {
  footlightApiUrl,
  footlightApiPlacesUrl,
  footlightApiOrganizationsUrl,
  footlightApiEventDetails,
  footlightApiPeopleUrl,
  footlightApiPersonDetails,
  footlightApiOrgDetails,
};
