// Imports
const mongoose = require('mongoose');

// url de acceso a mongodb
'mongodb+srv://leodesam:SW25QbVK8DF4BI6i@cluster0.numxigu.mongodb.net/?retryWrites=true&w=majority';

// conectando a la base 
async function conectarDB(){

    mongoose.connect(url)
    .then( ()=>{
        console.log("💚 Conexión a MongoDB en forma correcta 💚");
    })
    .catch((error)=>{
        console.log("⚠ hay un error en la conexión a MongoDB.\n"+ error);
    })

}
// exporta la fucnión para que server la utilice.
module.exports = conectarDB
