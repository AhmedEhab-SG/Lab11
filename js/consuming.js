import {
  getCountry,
  selectedFetchedData,
  fetchCountryAndNeigbour,
  drawFromClassArr,
} from "./lib/fucntions.js";

const page = document.querySelector(".page");

/*--------------------------------------------------------*/

const countryName = getCountry();

fetchCountryAndNeigbour(countryName)
  .then((response) => selectedFetchedData(response))
  .then((selectClass) => drawFromClassArr(selectClass, page));
