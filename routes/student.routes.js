const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { existenteCorreo, existeUserById, esRolValido} = require('../helpers/db-validators');

const { userGet, userPut, userPost } = require('../controllers/user.controller');


const router = Router();

router.post(
    "/", 
    [
        check("nombreU","El nombre es obligatorio").not().isEmpty(),
        check("passwordU","El password debe ser mayor a 6 caracteres").isLength({min: 6,}),
        check("correoU","Este no es un correo válido").isEmail(),
        check("correoU").custom(existenteCorreo),
        check("role").custom(esRolValido),
        validarCampos,
    ], userPost); 


router.get("/", usuariosGet);

router.put(
    "/:id",
    [
        check("id","El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeUserById),
        validarCampos
    ], userPut);


module.exports = router;