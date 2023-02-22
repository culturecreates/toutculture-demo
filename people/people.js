import { footlightApiPeopleUrl } from "../footlightApi.js";
import "./person-vignette.js";

organizations();

async function organizations() {
  const res = await fetch(footlightApiPeopleUrl);
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("ol");
  json.data.forEach((person) => {
    const el = document.createElement("person-vignette");
    el.person = person;
    main.appendChild(el);
  });
}

