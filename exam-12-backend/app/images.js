const express = require('express');
const Image = require('../models/Images');

const router = express.Router();

router.get('/', (req, res) => {
   Image.find().populate('user')
       .then(result => res.send(result))
       .catch(error => res.send(error))
});

router.get('/:id', (req, res) => {
   Image.find({user: req.params.id}).populate("user")
       .then(result => res.send(result))
       .catch(error => res.send(error))
});

module.exports = router;