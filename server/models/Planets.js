const { Schema, model } = require('mongoose');

const planetSchema = new Schema({
    name: {
        type: String,
        // required: true,
    },
    mass: {
        massValue: {
            type: Schema.Types.Decimal128,
            // required: true
        }
    },
    gravity: {
        type: Schema.Types.Decimal128,
        // required: true
    },
    density: {
        type: Schema.Types.Decimal128,
        // required: true
    },
    avgTemp: {
        type: Schema.Types.Decimal128,
        // required: true
    },
    bodyType: {
        type: String,
        // required: true
    }
});

const Planets = model('planet', planetSchema);

module.exports = Planets;