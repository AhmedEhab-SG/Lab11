export class Country {
  static #count;
  constructor(flagImg, name, region, population, lang, curr) {
    this.flagImg = flagImg;
    this.name = name;
    this.region = region;
    this.population = population;
    this.lang = lang;
    this.curr = curr;
    Country.#count++;
  }

  get populationInMil() {
    if (this.population.toString().length > 3) {
      return `${this.population.toString().substring(0, 3)}.${this.population
        .toString()
        .substring(3, 4)} M People`;
    } else {
      return `${this.population} M People`;
    }
  }

  static get count() {
    return this.#count;
  }
}
