const routerCharacter = require('../../services/app');


const routerApi = (app) => {
    app.use('/character', routerCharacter);
    // app.use('/trainers', routerTrainers);
}

module.exports = routerApi;