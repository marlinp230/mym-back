const express = require('express');
const router = express.Router();
const Caja = require('../models/caja')

router.get('/', async function (req, res, next) {
 
    try {
      const cajadb = await Caja.find()
      res.status(200).json(cajadb)
  
    } catch (error) {
      res.status(400).json(error)
  
    }
    res.send("hello223456")
  
  });


module.exports = router;