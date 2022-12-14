import { footlightApiOrganizationsUrl } from "../footlightApi.js";
import "./org-vignette.js";

organizations();

async function organizations() {
  const res = await fetch(footlightApiOrganizationsUrl);
  const json = await res.json();
  console.log(json);
  const main = document.querySelector("ol");
  json.data.forEach((org) => {
    const el = document.createElement("org-vignette");
    el.org = org;
    main.appendChild(el);
  });
}

