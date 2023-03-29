const routerCharacter = require('../characters/app');


const routerApi = (app) => {
    app.use('/character', routerCharacter);
    // app.use('/trainers', routerTrainers);
}

module.exports = routerApi;