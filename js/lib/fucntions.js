import { Country } from "../classes/Country.class.js";

const pascalCase = (fullString, msg) => {
  if (typeof fullString !== "string") {
    throw new Error(`please enter a vaild ${msg}!`);
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
  const mainCountry = prompt("please enter the country name!");

  const pascaleCountry = pascalCase(mainCountry, "country name");

  return pascaleCountry;
};

/*----------------------------------------------------------*/

async function fetchCountryAndNeigbour(countryName) {
  try {
    const response = await fetch(
      `https://restcountries.com/v2/name/${countryName}`
    );
    const countryData = await response.json();

    const neighbourResponse = await fetch(
      `https://restcountries.com/v2/alpha/${countryData[0].borders[1]}`
    );
    const neighbourData = await neighbourResponse.json();

    return { countryData, neighbourData };
  } catch (error) {
    throw new Error("something went wrong");
  }
}

/*-----------------------------------------------------------*/

const selectedFetchedData = ({ countryData, neighbourData }) => {
  let selectedData = [];

  selectedData.push(
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

  return selectedData;
};

/*--------------------------------------------------------*/

const drawFromClassArr = (selectedArr, targetObj) => {
  selectedArr.map((country) => {
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

    const infoArr = [
      {
        p: country.populationInMil,
        img: "../assets/img/population.png",
      },
      {
        p: country.lang,
        img: "../assets/img/lang.png",
      },
      {
        p: country.curr,
        img: "../assets/img/curr.png",
      },
    ];

    infoArr.map((info) => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const p = document.createElement("p");

      div.classList.add("info");

      img.src = info.img;
      p.textContent = info.p;

      div.append(img, p);
      main.appendChild(div);
    });

    container.append(countryImg, header, main);
  });
};

export {
  getCountry,
  selectedFetchedData,
  fetchCountryAndNeigbour,
  drawFromClassArr,
};
