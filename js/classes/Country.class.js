export class Country {
  static #count;
  constructor(flagImg, name, region, population, lang, curr) {
    this.flagImg = flagImg;
    this.name = name;
    this.region = region;
    this.population = population;
    this.lang = lang;
    this.curr = curr;
  }

  get populationInMil() {
    const numberString = this.population.toString();
    let formattedNumber = "";

    if (numberString.length > 3) {
      formattedNumber = `${numberString.substring(
        0,
        3
      )}.${numberString.substring(3, 4)} M People`;
    } else {
      formattedNumber = `${numberString} People`;
    }

    return formattedNumber;
  }

  get count() {
    return this.#count;
  }
}
