const mongoose = require('mongoose');

const gastosSchema =mongoose.Schema({
    descripcion: {
        type: String,
        required: [true, "Por favor ingrese una descripción del gasto"]
    },
    importe: {
        type: Number,
        required: [true, "Por favor ingrese el importe del gasto"]
    }
}, {
    timestamps: true
}) 
module.exports = mongoose.model('Gasto', gastosSchema)