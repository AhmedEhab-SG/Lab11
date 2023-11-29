import {
  getCountry,
  pushDataToClass,
  fetchCountryAndNeigbour,
  drawFromClassArr,
} from "./lib/fucntions.js";

const page = document.querySelector(".page");

/*--------------------------------------------------------*/

// fetchCountryAndNeigbour(countryName)
//   .then((response) => pushDataToClass(response))
//   .then((ClassesArr) => drawFromClassArr(ClassesArr, page));

// callback Hell???

/*------------------------------------------------------------*/

const consuming = async () => {
  const countryName = getCountry();

  const fetchedDate = await fetchCountryAndNeigbour(countryName);

  const countryArr = pushDataToClass(fetchedDate);

  drawFromClassArr(countryArr, page);
};

consuming();
