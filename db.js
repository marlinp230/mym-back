const mongoose=require("mongoose") 
const uri=`mongodb+srv://${process.env.DB}:${process.env.DB}@cluster0.dyxog.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`

  
     
mongoose.connect('mongodb+srv://mym:mym@cluster0.dyxog.mongodb.net/mym?retryWrites=true&w=majority')
.then(()=> console.log('db connected'))
.catch(e=>console.log(e))       

    
// git add .
// git commit -am "make it better"
//  git push heroku main          