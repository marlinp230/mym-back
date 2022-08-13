const {Router}= require('express');
const router = Router();
const Caja = require('../models/caja')



//Home
router.get('/', async(req, res, next)=> {
  try {
    const cajadb= await Caja.find()
    res.status(200).json(cajadb)
  } catch (error) {
    res.status(400).json(error)
  }
});

//add to db
router.post('/', async function (req, res, next) {
  const { Fecha,Nombre,Telefono,Detalle,Monto } = req.body    


 console.log(req.body)
  try {
    const orden= await Caja.find()
    const caja = await new Caja({ Fecha,Nombre, Telefono, Detalle, Monto,orden:orden.length+1 });
    console.log(orden.length)
    await caja.save() 

    res.json({caja,status:true,message:" Anadido en la Base de dato"})

  } catch (error) {            
    res.json({status:false,message:"NO pudo ser Anadido en la Base de dato"})

  }

});

module.exports = router;
