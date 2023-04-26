
const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const ClientSchema= new Schema({
    Fecha:{type:String},
    Nombre:{type:String},
   
    Monto:{
        type:Number,
        default:0
    },
    Interes:{
        type:Number,
        default:0
    },
    
     

        
   
}) 


const Client= mongoose.model("Client",ClientSchema)
module.exports=Client
