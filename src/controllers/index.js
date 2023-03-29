const CharacterService = require('../services/characters/app');
const characterService = new CharacterService();

const get = async (req, res) => {
    try {
      // console.log(characterService.queryAll())
      const characters = await characterService.queryAll();
      res.status(200).json(characters);
    } catch(error) {
      res.status(404).json( { message: 'no characters' } );
    }
}

const getById = (req, res) => {

}

const create = (req, res) => {
  try {
    const newCharacter = req.body;
    characterService.createCharacter(newCharacter);
    res.status(201).send();
  } catch(error) {
    res.status(500).json( { message: ' fatal error' } )
  }
  
}

const editPartial = (req, res) => {

}

const editComplete = (req, res) => {

}

const deleteCharacter = (req, res) => {

}

module.exports = {
    get,
    getById,
    create,
    editPartial,
    editComplete,
    deleteCharacter,
}