import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

//=====================================================
const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

//=====================================================
//SPRAWDZENIE CZY DZIAŁA
// fetchCountries('Italy')
//   .then(data => console.log(data))
//   .catch(console.error);
//=====================================================
searchBox.addEventListener(
  'input',
  debounce(e => {
    fetchCountries(searchBox.value.trim())
      .then(data => {
        if (data.length > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          countryList.innerHTML = '';
          return [];
        }

        if (data.length > 1 && data.length < 10) {
          countryList.innerHTML = '';
          countryInfo.innerHTML = '';
          data.forEach(country => {
            let listItem = `<li class="country-item"> <img class="country-flag" src="${country.flags.svg}" alt="Country flag"><p >${country.name.common}</p></li>`;
            countryList.innerHTML += listItem;

            console.log(country);
          });
        }

        if (data.length === 1) {
          countryList.innerHTML = '';
          countryInfo.innerHTML = '';
          let CurrentCoutry = `<div class="country-item"> <img class="country-flag" src="${
            data[0].flags.svg
          }" alt="Country flag"><p class="bold-value upper-text">${
            data[0].name.common
          }</p></div>
          <p><span class="bold-value">Capital: </span>${data[0].capital}</p>
          <p><span class="bold-value">Population: </span>${
            data[0].population
          }</p>
          <p><span class="bold-value">Languages: </span>${Object.values(
            data[0].languages
          ).join(', ')}</p>`;
          countryInfo.innerHTML += CurrentCoutry;
          //console.log(data[0].Object.value(languages));
        }
        if (!data) {
          countryList.innerHTML = '';
          countryInfo.innerHTML = '';
        }
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name.');
      });
  }, DEBOUNCE_DELAY)
);
