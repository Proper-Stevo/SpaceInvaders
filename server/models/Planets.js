const { valueFromAST } = require('graphql');
const { Schema, model } = require('mongoose');

const planetSchema = new Schema({
    name: {
        type: String,
        // required: true,
    },
    mass: {
        type: Number,
        // required: true
    },
    gravity: {
        type: Number,
        // required: true
    },
    density: {
        type: Number,
        // required: true
    },
    avgTemp: {
        type: Number,
        // required: true
    },
    bodyType: {
        type: String,
        // required: true
    },
    moons: {
        type: Array,
    },
    sideralOrbit: {
        type: Number,
        // required: true
    },
    sideralRotation: {
        type: Number,
        // required: true
    },
    distanceFromSun: {
        type: Number,
        // required: true
    },
    yearLength: {
        type: Number,
        // required: true
    }
});

const Planets = model('planet', planetSchema);

module.exports = Planets;