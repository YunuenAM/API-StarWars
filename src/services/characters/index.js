class CharacterServices {

    constructor() {
        this.characters = [];
        // dummy o codigo en duro, simular los datos
        this.generateData();
    }
  
    generateData() {
        this.characters = [
            { id: 1, name: 'Darth Sidious', skill: 'politics', weapon: 'democracy', quote: '¡Power, unlimited power!'},
            { id: 2, name: 'Mace Windu', skill: 'wisdom and courage', weapon: 'jedi lightsaber', quote: 'If What You have Told Me Is True You Will Have Gained My Trust' },
            { id: 3, name: 'C-3PO', skill: 'ability to communicate', weapon: 'none', quote: ' sometimes, I just dont understand human behavior'  },
            { id: 4, name: 'Chewbacca', skill: 'ferocity', weapon: 'Chewbaccas crossbow', quote: 'Rwwww'}
            
        ];
    }
  
    createCharacter(newCharacter){
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
                this.characters.push(newCharacter);
                resolve(); // try
                // reject catch
            }, 1000);

           
        })
    }
  
    queryAll(){
  
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.characters); // try
                // reject catch
            }, 1000);
        })
        
    }
  
    queryById(){
        const id = req.params.id;
        console.log('req.params: ', id);
        console.log('req.params: ', typeof id);
        // aqui iria la consulta la bd con el id
        const foundedCharacter = characters.filter(character => character.id === parseInt(id) )[0];
        console.log('foundedCharacter: ', foundedCharacter);
        res.status(200).json(foundedCharacter);
    }
  
    editPartial(){
        const id = req.params.id;
        const newCharacter = req.body;
        console.log('newCharacter: ', newCharacter);
        const index = characters.findIndex(character => character.id === parseInt(id));
        characters[index] = newCharacter;
        console.log('characters', characters);
        res.status(200).send();
    }
  
    editComplete(id, newData) {
        return new Promise((resolve, reject) => {
            const index = this.characters.findIndex(character => character.id === parseInt(id));
            if (index !== -1) {
                this.characters[index] = newData;
                resolve(this.characters[index]);
            } else {
                reject(new Error('Character not found'));
            }
        });
    }
  
  
    deleteCharacter(id){
 
            // this.characters.delete(quitCharacter);
            console.log(id+'delete') //id + 
    
  
    
  
  }
}
  
  module.exports = CharacterServices;