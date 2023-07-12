const baseUrl = "https://staging.api.footlight.io";
const endPoint = `${baseUrl}/calendars/tout-culture/`;
const footlightApiUrl = `${endPoint}events?page=1`;
const footlightApiPlacesUrl = `${endPoint}places?sort=name.fr&page=1&limit=100&include-event-count=true`;
const footlightApiOrganizationsUrl = `${endPoint}organizations?sort=name.fr&page=1&limit=100&concept=635fa2ab7086d70059aca2bc`;
const footlightApiPeopleUrl = `${endPoint}people?sort=name.en&page=1&limit=100`;
const footlightApiEventDetails = `${baseUrl}/events`;
const footlightApiPersonDetails = `${baseUrl}/people`;
const footlightApiOrgDetails = `${baseUrl}/organizations`;
const footlightApiPlaceDetails = `${baseUrl}/places`;

export {
  footlightApiUrl,
  footlightApiPlacesUrl,
  footlightApiOrganizationsUrl,
  footlightApiEventDetails,
  footlightApiPeopleUrl,
  footlightApiPersonDetails,
  footlightApiOrgDetails,
  footlightApiPlaceDetails,
};
