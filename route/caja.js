const {Router}= require('express');
const router = Router();
const Caja = require('../models/caja')

router.get('/', async(req, res, next)=> {
 
  try {
    const cajadb= await Caja.find()
    res.status(200).json(cajadb)
  } catch (error) {
    res.status(400).json(error)
  }
   
   
  });


module.exports = router;
