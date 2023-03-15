import './css/styles.css';
import fetchCountries from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

//SPRAWDZENIE CZY DZIAŁA
fetchCountries('Italy')
  .then(data => console.log(data))
  .catch(console.error);
