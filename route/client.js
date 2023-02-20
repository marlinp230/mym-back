const {Router}= require('express');
const router = Router();
const Client= require('../models/newClient')
const Caja= require('../models/caja')




//Home
router.get('/', async(req, res, next)=> {
  try {
    const client= await Client.find()
    res.status(200).json(client)
  } catch (error) {
    res.status(400).json({error:error.message,error})
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


// get totlas
router.get('/gettotal', async(req, res, next)=> {
  const array=[{
    
    Nombre: 'ERIDELBY',
   
    Monto: 3460,
   
    
  }]
  try {
    const client= await Client.find()

    
    const cajadb= await Caja.find()

    cajadb.map(caja=>{    
      console.log(caja)
    })


    res.status(200).json({cajas:'caja-----------------------------------------------------------------------------------------------------------------------------------------------------------',array})
  } catch (error) {
    res.status(400).json(error)
  }
});

module.exports = router;
