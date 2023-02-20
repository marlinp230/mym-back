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



  try {
    const orden= await Caja.find()
    const caja = await new Caja({ Fecha,Nombre, Telefono, Detalle, Monto,orden:orden.length+1 });
    console.log(orden.length)
    await caja.save() 

    res.json({caja,status:true,message:" Anadido en la Base de dato"})

  } catch (error) {            
    res.json({status:false,message:"NO pudo ser Anadido en la Base de dato", mensaje:error.message})

  }

});

//delete
//add to db
router.delete('/:id', async function (req, res, next) {
  const {id}=req.params    

  try {
    const deleted= await Caja.findByIdAndDelete(id)        

    res.status(200).json({deleted,status:true,message:"Eliminado!"})
   
  } catch (error) {
    res.status(200).json({error,status:false,message:"Np pudo ser eliminado!"})

  }

});
//find by name

router.get('/profile/:only', async function (req, res, next) {
  const {only}=req.params    
  console.log(only)
  try {
    const Lista= await Caja.find({Nombre:only})        

    res.status(200).json(Lista)
   
  } catch (error) {
    res.status(200).json({error,status:false,message:"Nop pudo se encontrado!"})

  }    

});
//turn
router.put('/turn/:id', async(req,res)=>{ 
  const {id}=req.params;
    try {
      const caja= await Caja.findById(id);
      caja.estado=!caja.estado
      await caja.save()
  
      res.status(200).json(caja)
     
    } catch (error) {
     res.status(200).json(error)
      
    }
  })    

module.exports = router;
