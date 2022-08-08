const mongoose=require("mongoose") 
const uri=`mongodb+srv://${process.env.DB}:${process.env.DB}@cluster0.dyxog.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`

  
  
mongoose.connect(uri, {      
 useNewUrlParser: true,    
 useUnifiedTopology: true, 


}).then(()=> console.log('db connected')).catch(e=>console.log(e))       