import { drawCountries, getCountry, fetchData } from "./lib/fucntions.js";

const page = document.querySelector(".page");

/*--------------------------------------------------------*/

const countryName = getCountry();

fetchData(countryName).then((response) => drawCountries(response, page));
