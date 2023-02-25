const express = require('express');
var dotenv = require('dotenv');
var cors= require('cors');
var morgan= require('morgan');

dotenv.config()
const app = express();

const PORT=process.env.PORT || 3000;



require('./db')
//middle ware
app.use(morgan('dev'))  
app.use(cors({
    origin:["https://frontmym.herokuapp.com/","http://localhost:3000"],     
    credentials:false 
}))
app.use(express.json()) 

app.use('/v', require('./route/caja'))
app.use('/client', require('./route/client'))

app.get('/', (req,res)=>{
    res.send('hello')
})




app.listen(PORT, () => {
    console.info(`Server listen on port ${PORT}`);
})