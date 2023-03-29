const express = require('express');
const { get, getById, create, editComplete, editPartial, deleteCharacter } = require('../../controllers/index')
const characterRouter = express.Router();

characterRouter.get('/', get);

characterRouter.get('/:id/', getById);

characterRouter.post('/', create);

characterRouter.patch('/:id', editPartial);

characterRouter.put('/:id', editComplete);

characterRouter.delete('/:id', deleteCharacter);

module.exports = characterRouter;