const apiKey = '' ;
const format = 'json' ;
const source = 'http://kg.artsdata.ca/culture-creates/footlight/osm-ca' ; 
const frame = 'event_bn';
const baseUrl = 'http://api.artsdata.ca/events' ;
const artsdataApiUrl = `${baseUrl}?format=${format}&source=${source}&frame=${frame}` ;

export { artsdataApiUrl } ;