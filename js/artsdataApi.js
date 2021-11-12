const apiKey = 'sandbox' ;
const format = 'json' ;  // json|jsonld
const source = 'http://kg.artsdata.ca/culture-creates/footlight/spec-qc-ca' ; // see list at https://s.zazuko.com/7PVXW
const baseUrl = 'https://artsdata-api-staging.herokuapp.com' ;

const artsdataApiUrl = `${baseUrl}?apiKey=${apiKey}&format=${format}&source=${source}` ;

export { artsdataApiUrl } ;