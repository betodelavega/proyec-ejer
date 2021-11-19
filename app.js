const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode) {
  //Complete with your code
  let paisAuxi = {};
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].iso3 === isoCode) {
      paisAuxi = countries[i];
    }
  }
  return paisAuxi;
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */

//Complete with your code
function getCountryTranslatedName(isoCode, language) {
  let countryTranslate = {};
  for (let i = 0; i < countries.length; i++) {
    if (isoCode === countries[i].iso3) {
      countryTranslate.isocode3 = countries[i].iso3;
      for (lang in countries[i].translations) {
        if (language === lang) {
          countryTranslate.translate = countries[i].translations[lang];
        }
      }
    }
  }
  return countryTranslate;
}

/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion) {
  const countrySub = {};
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].subregion === subregion) {
      countrySub[i] = countries[i];
    }
  }
  return countrySub;
}

function main() {
  console.log('///// Ejercicio 1 /////\n', getCountryByIso3('ARG'), '\n');
  console.log('///// Ejercicio 2 /////\n', getCountryTranslatedName('ARG', 'ja'), '\n');
  console.log('///// Ejercicio 3 /////\n', getCountriesBySubregion('South America'), '\n');
}

main();
