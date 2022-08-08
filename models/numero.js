
const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const numero= new Schema({
    estado:{
        type: Boolean,
        default:true
    },
    Numero:{type:Number,default: 00,unique:true}, 
    Nombre:String

      

    
   
}) 


const Numero= mongoose.model("Numero",numero)
module.exports=Numero
