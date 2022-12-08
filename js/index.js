import { artsdataApiUrl } from "./artsdataApi.js"
import "./artsdata-event.js"
window.addEventListener('load',() => {
  upcomingEvents();
});

async function upcomingEvents() {
  const res = await fetch(artsdataApiUrl)
  const json = await res.json()
  console.log(json);
  const main = document.querySelector('main')
  json.data.forEach(event => {
    const el = document.createElement('artsdata-event')
    el.event = event
    main.appendChild(el)
  })

  
}