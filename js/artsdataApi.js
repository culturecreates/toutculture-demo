const apiKey = '' ;
const format = 'json' ;
const source = 'http://kg.artsdata.ca/culture-creates/footlight/spec-qc-ca' ; 
const frame = 'event_bn';
const limit = 10;
const baseUrl = 'http://api.artsdata.ca/events' ;
const artsdataApiUrl = `${baseUrl}?format=${format}&source=${source}&frame=${frame}&limit=${limit}` ;

export { artsdataApiUrl } ;