const mongoose=require("mongoose") 

 
   
mongoose.connect(`${process.env.URI}`)
.then(()=> console.log('db connected'))
.catch(e=>console.log(e))       

      
// git add .
// git commit -am "make it better"
//  git push heroku main          