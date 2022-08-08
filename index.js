const express = require('express');
var dotenv = require('dotenv');
var cors= require('cors');

const app = express();
dotenv.config()
app.set('port', process.env.PORT || 3000) 



require('./db')
//middle ware
app.use(cors())
app.use(express.json())

app.use('/', require('./route/caja'))



app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})