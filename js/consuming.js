import {
  drawCountryAndNeigbour,
  getCountry,
  fetchCountryAndNeigbour,
} from "./lib/fucntions.js";

const page = document.querySelector(".page");

/*--------------------------------------------------------*/

const countryName = getCountry();

fetchCountryAndNeigbour(countryName).then((response) =>
  drawCountryAndNeigbour(response, page)
);
