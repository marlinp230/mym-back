
const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const ClientSchema= new Schema({
    Fecha:{type:String},
    Nombre:{type:String,unique:true}
    

    
   
}) 


const Client= mongoose.model("Client",ClientSchema)
module.exports=Client
