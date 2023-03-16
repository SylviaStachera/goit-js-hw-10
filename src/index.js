import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

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
      .then(data => {
        if (data.length > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          return [];
        }

        if (data.length < 10) {
          console.log(data);
        }
      })
      .catch(console.error);
  }, 300)
);
