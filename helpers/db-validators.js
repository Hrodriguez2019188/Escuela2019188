const User = require( '../models/User' );





const existenteCorreo = async (correoU = '') => {
    const existeEmail = await User.findOne({correoU});
    if(existeEmail){
        throw new Error(`El email ${ correoU } ya fue registrado`);
    }
}


const existeUserById = async ( id = '') => {
    const existeUser = await User.findOne({id});
    if(existeUser){
        throw new Error(`El usuario con el ${ id } no existe`);
    }
}

const esRolValido = async (role='') => {
    const existeRol = await Role.findOne({role});

    if(!existeRol){
        throw new Error(`El role ${ role } no existe en base de datos.` )
    }
}

module.exports = {
    existenteCorreo,
    existeUserById,
    esRolValido
    
};