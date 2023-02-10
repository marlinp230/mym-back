
const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const ClientSchema= new Schema({
    Fecha:{type:String},
    Nombre:{type:String},
    orden: {
        type: Number,
        required: [true, "Necesito numero de orden"]
    },
    total:{
        type:Number
    }
    
     

        
   
}) 


const Client= mongoose.model("Client",ClientSchema)
module.exports=Client
