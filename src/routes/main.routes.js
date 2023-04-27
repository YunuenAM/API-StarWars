const express = require('express');
const routerCharacter = require('./characters');

const routerApi = (app) => {
  app.use(express.json());
  app.use('/characters', routerCharacter);
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
};

module.exports = routerApi;



// const express = require('express');
// const routerCharacter = require('./characters/index');


// const routerApi = (app) => {
//     app.use('/character', routerCharacter);
//     // app.use('/trainers', routerTrainers);
// }

// module.exports = routerApi;