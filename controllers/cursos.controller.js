const { response, json } = require('express');
const bcryptjs = require('bcryptjs');
const Cursos  = require('../models/cursos');


const cursoPost = async (req, res) =>{
    const { nombreC, profesorC } = req.body;
    const curso = new Cursos({ nombreC, profesorC });
    await curso.save();
    res.status(200).json({
        curso
    });
}

module.exports = {
    cursoPost
}