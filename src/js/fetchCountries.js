const fetchCountries = name => {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
        return [];
      }
      return response.json();
    })
    .then(data => {
      //console.log(data);
      return data;
    })
    .catch(console.error);
};

export default fetchCountries;
