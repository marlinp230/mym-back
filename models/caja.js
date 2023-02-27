const {Schema,model} = require('mongoose');

const cajaSchema = new Schema({

    Fecha: {
        type: String
    },
    Nombre: String,
    Detalle: String,
    Monto: {
        type: Number,
        default: 0
    },
   
    orden: {
        type: Number,
        required: [true, "Necesito numero de orden"]
    },
    estado: {
        type: Boolean,
        default: true
    },
   id2:{
    type: String,
    default: true
   }



})


const Caja = model("Caja", cajaSchema)     
module.exports = Caja     