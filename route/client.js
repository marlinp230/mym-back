const {Router}= require('express');
const router = Router();
const Client= require('../models/newClient')





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
  const { Fecha,Nombre,Monto,Telefono,Interes } = req.body;   


 console.log(req.body)
  try {
  
    const client=  new Client({ Fecha, Nombre,Monto,Telefono,Interes });

    await client.save() 

    res.json({client,status:true,message:" Anadido en la Base de dato."})

  } catch (error) {            
    res.json({status:false,error,message:"No pudo ser Anadido en la Base de dato."});
    console.log(error)

  }

});


    
// // get totlas
// router.get('/getclient/:Nombre', async(req, res, next)=> {
//   const array=[{
    
//     Nombre: 'ERIDELBY',
   
//     Monto: 3460,
    
    
//   }]  
//   const {Nombre}= req.params;
  

//   try {
//     const client= await Client.find({Nombre})
    
//     const JOSEHERMA= await Client.find({Nombre:"JOSEHERMA"})
//     const CAJA= await Caja.find({Nombre:"CAJA"})
//     console.log(CAJA)
//     // const EDUARDO= await Client.find({Nombre:"EDUARDO"}).reduce((p,c)=>p+c.Monto,0)
//     // console.log(JOSEHERMA.reduce((p,c)=>p+c.Monto,0)
//     const cajadb= await Caja.find({Nombre:client[0].Nombre})
//     cajadb.sort((a,b)=>{
//       if (a.orden > b.orden) {
//         return -1
//       }
//     })
//     res.status(200).json({client,cajadb,})   
//   } catch (error) {
//     res.status(400).json(error)
//   }
// });

module.exports = router;
