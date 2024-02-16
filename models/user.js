const { Schema, model} = require('mongoose');

const UserSchema = Schema ({
    nombreU: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correoU: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    passwordU: {
        
    },
    Cursos:{
        type: String,
        required: [true, 'El curso es obligatorio']
    },
    role: {
        type: String,
        required: true,
        enum: ["STUDENT_ROLE", "TEACHER_ROLE"],
        default: "STUDENT_ROLE"
    },
    estado:{
        type: Boolean,
        default: true
    }
    
}); 

module.exports = model('User', UserSchema);