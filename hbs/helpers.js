const hbs = require('hbs');

// helpes
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})


hbs.registerHelper('capitalizar', ( texto ) => {
     let palabras = texto.split(' ');
     palabras.forEach(( palbra, idx ) => {
          palabras[idx] = palbra.charAt(0).toUpperCase() + palbra.slice(1).toLowerCase();
     })

     return palabras.join(' ');
})