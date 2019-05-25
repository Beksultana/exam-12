const express = require('express');
const Image = require('../models/Images');

const router = express.Router();

router.get('/', (req, res) => {
   Image.find()
       .then(result => res.send(result))
       .catch(error => res.send(error))
});

module.exports = router;