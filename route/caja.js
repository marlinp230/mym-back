const express = require('express');
const router = express.Router();
const Caja1 = require('../models/caja')

router.get('/', async function (req, res, next) {
 
    try {
      const cajadb = await Caja1.find()
      res.status(200).json(cajadb)
  
    } catch (error) {
      res.status(400).json(error)
  
    }
  
  });


module.exports = router;