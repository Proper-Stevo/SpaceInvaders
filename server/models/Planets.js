const { Schema, model } = require('mongoose');

const planetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    mass: {
        massValue: {
            type: Number,
            required: true
        }
    },
    gravity: {
        type: Number,
        required: true
    },
    density: {
        type: Number,
        required: true
    },
    avgTemp: {
        type: Number,
        required: true
    },
    bodyType: {
        type: String,
        required: true
    }
});

const Planets = model('planet', planetSchema);

module.exports = Planets;