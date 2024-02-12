const { response, json } = require('express');
const bcryptjs = require('bcryptjs');
const User  = require('../models/User.model');


const userPost = async (req, res) =>{
    const { nombreU, passwordU, correoU, role} = req.body;
    const user = new User({nombreU, passwordU, correoU, role});

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(passwordU, salt);

    await user.save();
    res.status(200).json({
        user
    });
}

const userGet = async (req, res = response ) => {
    const { limite, desde } = req.query;
    const query = { estado: true};

    const [total, user] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        user
    });
} 

const userPut = async (req, res) => {
    const { id } = req.params;
    const { _id, nombreU, passwordU, correoU, ...resto} = req.body;

    await Student.findByIdAndUpdate(id, resto);

    const student = await Student.findOne({_id: id});

    res.status(200).json({
        msg: 'Usuario Actualizado exitosamente',
        student
    })
}

module.exports = {
    userGet,
    userPut,
    userPost
}