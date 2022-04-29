const mongoose = require('mongoose');
require('dotenv').config()

const uri = process.env["CONNECT_STRING"];

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const MusicSchema = new Schema({
    id: {
        type: Number,
        index: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    year: Number,
    albumName: String,
    bandName: String,
    genre: String,
});

const MusicModel = mongoose.model('MusicModel', MusicSchema);

module.exports = {
    MusicModel,
};