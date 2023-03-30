const CharacterService = require('../../services/characters');
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

const deleteCharacter =  async (req, res) => {

  try {
    // const quitCharacter = req.body;
    const {id} = req.params
    console.log(id)
    characterService.deleteCharacter(id);
    res.status(201).send();
  } catch(error) {
    res.status(500).json( { message: ' fatal error' } )
  }

}

module.exports = {
    get,
    getById,
    create,
    editPartial,
    editComplete,
    deleteCharacter,
}