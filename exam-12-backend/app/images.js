const express = require('express');
const Image = require('../models/Images');
const multer = require('multer');
const config = require('../config');
const nanoid = require('nanoid');
const path = require('path');
const auth = require('../middleware/auth');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});

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

router.post('/', [auth, upload.single('img')], (req, res) => {
    const photoData = req.body;

    if (req.file) {
        photoData.img = req.file.filename;
    }

    photoData.user = req.user._id;

    const photo = new Image(photoData);

    photo.save()
        .then(result => res.send(result))
        .catch(error => res.send(error))
});

router.delete('/:id', auth, (req, res) => {
   Image.findByIdAndDelete({_id: req.params.id})
       .then(result => res.send(result))
       .catch(error => res.send(error))
});

module.exports = router;