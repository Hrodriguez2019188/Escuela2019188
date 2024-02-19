const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { cursoPost  } = require('../controllers/cursos.controller');


const router = Router();

router.post(
    "/", 
    [
        check("nombreC","El nombre es obligatorio").not().isEmpty(),
        check("profesorC","El profesor es obligatorio").not().isEmpty(),
        validarCampos,
    ], cursoPost); 


module.exports = router;