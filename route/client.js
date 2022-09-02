const {Router}= require('express');
const router = Router();
const Client= require('../models/newClient')



//Home
router.get('/', async(req, res, next)=> {
  try {
    const client= await Client.find()
    res.status(200).json(client)
  } catch (error) {
    res.status(400).json(error)
  }
});

//add to db
router.post('/', async function (req, res, next) {
  const { Fecha,Nombre,Telefono } = req.body;   


 console.log(req.body)
  try {
    const orden= await Client.find()
    const client= await new Client({ Fecha, Nombre,Telefono,orden:orden.length+1 });

    await client.save() 

    res.json({client,status:true,message:" Anadido en la Base de dato"})

  } catch (error) {            
    res.json({status:false,error,message:"NO pudo ser Anadido en la Base de dato"});
    console.log(error)

  }

});

module.exports = router;
