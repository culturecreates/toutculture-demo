const apiKey = 'sandbox' ;
const format = 'json' ;  // json|jsonld
const source = 'http://kg.artsdata.ca/culture-creates/footlight/spec-qc-ca' ; // see list at https://s.zazuko.com/7w6bJ
const baseUrl = 'https://artsdata-api-staging.herokuapp.com' ;
const endPoint = `${baseUrl}/events`
const artsdataApiUrl = `${endPoint}?apiKey=${apiKey}&format=${format}&source=${source}` ;

export { artsdataApiUrl } ;