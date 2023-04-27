
const express = require('express');
const routerCharacter = require('./characters/index.js');


const routerApi = (app) => {
    app.use('/character', routerCharacter);
    // Agrega estas dos líneas:
  routerCharacter.patch('/:id', editPartial);
  routerCharacter.put('/:id', editComplete);
    // app.use('/trainers', routerTrainers);
}

module.exports = routerApi;