
const express = require('express');
const routerCharacter = require('./characters/index.js');


const routerApi = (app) => {
    app.use('/character', routerCharacter);
  
    // app.use('/trainers', routerTrainers);
}

module.exports = routerApi;