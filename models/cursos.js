const { Schema, model} = require('mongoose');

const CursosSchema = Schema ({
    nombreC: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    profesorC: {
        type: String,
        required: [true, 'El profesor es obligatorio']
    }
    
}); 

module.exports = model('curso', CursosSchema);