const apiKey = 'sandbox' ;  // limited calls. Contact info@culturecreates.com for your apiKey.
const format = 'json' ;  // json or jsonld
const source = 'http://kg.artsdata.ca/culture-creates/footlight/spec-qc-ca' ; // see list at https://s.zazuko.com/7w6bJ
const baseUrl = 'https://api.artsdata.ca' ;
const endPoint = `${baseUrl}/events`
const artsdataApiUrl = `${endPoint}?apiKey=${apiKey}&format=${format}&source=${source}` ;

export { artsdataApiUrl } ;