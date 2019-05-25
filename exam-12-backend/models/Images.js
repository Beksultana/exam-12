const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

const Image = mongoose.model('Image', ImagesSchema);
module.exports = Image;