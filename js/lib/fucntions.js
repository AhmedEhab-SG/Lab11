import { Country } from "../classes/Country.class.js";

const pascalCase = (fullString, msg) => {
  if (typeof fullString !== "string") {
    throw new Error(`please enter a vaild ${msg} !`);
  }

  let splitedString = fullString.toLowerCase().split(" ");
  let pascalCaseLetter;
  let pascalCaseCombined = "";

  for (let i = 0; i < splitedString.length; i++) {
    pascalCaseLetter =
      " " +
      splitedString[i].charAt(0).toUpperCase() +
      splitedString[i].slice(1);
    pascalCaseCombined += pascalCaseLetter;
  }

  return pascalCaseCombined.slice(1);
};

/*---------------------------------------------------------*/

const getCountry = function () {
  const mainCountry = prompt("please enter the Country name !");

  const pascaleCountry = pascalCase(mainCountry);

  return pascaleCountry;
};

/*----------------------------------------------------------*/

async function fetchData(countryName) {
  let countries = [];

  try {
    const response = await fetch(
      `https://restcountries.com/v2/name/${countryName}`
    );
    const countryData = await response.json();

    const neighbourResponse = await fetch(
      `https://restcountries.com/v2/alpha/${countryData[0].borders[1]}`
    );

    const neighbourData = await neighbourResponse.json();

    countries.push(
      new Country(
        countryData[0].flag,
        countryData[0].name,
        countryData[0].region,
        countryData[0].population,
        countryData[0].languages[0].name,
        countryData[0].currencies[0].name
      ),
      new Country(
        neighbourData.flag,
        neighbourData.name,
        neighbourData.region,
        neighbourData.population,
        neighbourData.languages[0].name,
        neighbourData.currencies[0].name
      )
    );
  } catch (error) {
    throw new Error("something went wrong");
  }

  return countries;
}

/*-----------------------------------------------------------*/

const drawCountries = (countriesArr, targetObj) => {
  countriesArr.map((country) => {
    const container = document.createElement("div");
    container.classList.add("container");
    targetObj.append(container);

    const countryImg = document.createElement("img");
    countryImg.src = country.flagImg;

    const header = document.createElement("header");
    const h2 = document.createElement("h2");
    const h5 = document.createElement("h5");
    h2.textContent = country.name;
    h5.textContent = country.region;
    header.append(h2, h5);

    const main = document.createElement("main");
    const divPeople = document.createElement("div");
    const divLang = document.createElement("div");
    const divCurr = document.createElement("div");

    divPeople.classList.add("info");
    divLang.classList.add("info");
    divCurr.classList.add("info");

    const imgPeople = document.createElement("img");
    imgPeople.src = "../assets/img/population.png";

    const pPepole = document.createElement("p");
    pPepole.textContent = country.populationInMil;

    divPeople.append(imgPeople, pPepole);

    const imgLang = document.createElement("img");
    imgLang.src = "../assets/img/lang.png";

    const pLang = document.createElement("p");
    pLang.textContent = country.lang;

    divLang.append(imgLang, pLang);

    const imgCurr = document.createElement("img");
    imgCurr.src = "../assets/img/curr.png";

    const pCurr = document.createElement("p");
    pCurr.textContent = country.curr;

    divCurr.append(imgCurr, pCurr);

    main.append(divPeople, divLang, divCurr);

    container.append(countryImg, header, main);
  });
};

export { getCountry, drawCountries, fetchData };
