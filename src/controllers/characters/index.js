const CharacterService = require('../../services/characters');
const characterService = new CharacterService();

const get = async (req, res) => {
  try {
    const characters = await characterService.queryAll();
    res.status(200).json(characters);
  } catch(error) {
    res.status(404).json({ message: 'no characters' });
  }
};

const getById = async (req, res) => {
  try {
    const character = await characterService.queryById(req.params.id);
    res.status(200).json(character);
  } catch(error) {
    res.status(404).json({ message: 'character not found' });
  }
};

const create = async (req, res) => {
  try {
    const newCharacter = req.body;
    const createdCharacter = await characterService.createCharacter(newCharacter);
    res.status(201).json(createdCharacter);
  } catch(error) {
    res.status(500).json({ message: 'fatal error' });
  }
};

const editPartial = async (req, res) => {
  try{
    const resourceId = req.params.id;
    const patchData = req.body;
    const updatedResource = await characterService.patchCharacter(resourceId, patchData);
    res.status(200).json(updatedResource);
  } catch(error){
    console.error(error);
    res.status(500).json({message: 'Failed to update resource'});
  }
};

const editComplete = async (req, res) => {
  try {
    const resourceId = req.params.id;
    const newData = req.body;
    const updatedResource = await characterService.updateCharacter(resourceId, newData);
    res.status(200).json(updatedResource);
  } catch(error) {
    console.error(error);
    res.status(500).json({message: 'failed to update resource'});
  }
};

const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    await characterService.deleteCharacter(id);
    res.status(204).send();
  } catch(error) {
    res.status(500).json({ message: 'fatal error' });
  }
};

module.exports = {
  get,
  getById,
  create,
  editPartial,
  editComplete,
  deleteCharacter,
};
