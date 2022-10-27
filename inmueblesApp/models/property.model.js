const mongoose = require('mongoose');
/* Creating a new schema object. */
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    floor: {
        type: Number,
        min: [0, 'The floor of a property cannot be negative.'],
        max: [30, 'Skyscrapers are no higher than 30 floors.'],
        required: true
    },
    letter:
    {
        type: String,
        maxlength: [1, 'It has to be a single letter.'],
        required: false
    },
    size: {
        type: Number,
        min: [30, 'The minimum size required for property is 30m2'],
        required: true
    },
    num_rooms: {
        type: Number,
        min: [1, 'The number of rooms cannot be less than 1.'],
        required: true
    },
    rented: {
        type: Boolean,
        required: true
    },
    owner: {
        type: String,
        minlength: [3, 'The owners name must be at least 3 letters in length.'],
        maxlength: [30, 'The owners name must have a maximun of 30 letters.'],
        required: true
    },
    contact_email:
    {
        type: String,
        match: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        required: true
    }
});

/* Exporting the model to be used in other files. */
module.exports = mongoose.model('property', propertySchema, 'properties');