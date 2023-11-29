import {
  getCountry,
  pushDataToClass,
  fetchCountryAndNeigbour,
  drawFromClassArr,
} from "./lib/fucntions.js";

const page = document.querySelector(".page");

/*--------------------------------------------------------*/

const countryName = getCountry();

fetchCountryAndNeigbour(countryName)
  .then((response) => pushDataToClass(response))
  .then((ClassesArr) => drawFromClassArr(ClassesArr, page));
