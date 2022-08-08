const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const caja= new Schema({
    estado:{ 
        type: Boolean,
        default:true
    },
    Fecha:{type:String},
    Nombre:String,

    Detalle:String,
    Monto:{type:Number,default: 0},  
    Option:{type:String},
    Balance:String,
    orden:{
        type:Number,
        required:[true,"Necesito numero de orden"]
    }   

    
   
})  


const Caja1= mongoose.model("Caja1",caja)
module.exports=Caja1
