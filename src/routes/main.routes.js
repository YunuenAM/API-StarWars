const routerCharacter = require('./characters/index');


const routerApi = (app) => {
    app.use('/character', routerCharacter);
    // app.use('/trainers', routerTrainers);
}

module.exports = routerApi;