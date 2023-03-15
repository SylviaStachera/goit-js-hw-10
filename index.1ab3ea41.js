var e;(e="Italy",fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>e)).catch(console.error)).then((e=>console.log(e))).catch(console.error);
//# sourceMappingURL=index.1ab3ea41.js.map
