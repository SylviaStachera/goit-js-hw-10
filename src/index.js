import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';

//=====================================================
const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector('input#search-box');

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
      .then(data => console.log(data))
      .catch(console.error);
  }, 300)
);
