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

const editPartial = async(req, res) => {
  try{
    const resourceId = req.params.id; // Get the id of the resource from the URL parameters
    const patchData = req.body; //Get the new data for the resource from the request body
    patchResource(resourceId,patchData);
    res.status(200).json(updatedResource)
  } catch(error){
    console.error(error);
    res.status(500).json({message: 'Failed to update resource'})
  }

}

const editComplete = async(req, res) => {

  
  try{
    updatedResource (resourceId,newData);
    const resourceId = req.params.id; //Get the ID of the resource from the URL params
    const newData =req.body; //Get the new data for the resource from the request body
    res.status(200).json(updatedResource);
  }catch(error){
    res.status(500).json({message: 'failed to update resource'})
  }



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