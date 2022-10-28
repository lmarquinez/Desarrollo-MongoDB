const mongoose = require('mongoose');
/* Creating a new schema object. */
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    /* Defining the floor property of the propertySchema. It is a number, it cannot be negative, it
    cannot be higher than 30, and it is required. */
    floor: {
        type: Number,
        min: [0, 'The floor of a property cannot be negative.'],
        max: [30, 'Skyscrapers are no higher than 30 floors.'],
        required: [true, 'You must enter the floor of the property']
    },
    /* A property of the propertySchema. It is a string, it cannot be longer than 1 letter, and it is
    not required. */
    letter:
    {
        type: String,
        maxlength: [1, 'It has to be a single letter.'],
        required: false
    },
    /* Defining the size property of the propertySchema. It is a number, it cannot be less than 30, and
    it is required. */
    size: {
        type: Number,
        min: [30, 'The minimum size required for property is 30m2'],
        required: [true, 'You must enter the size of the property']
    },
    /* Defining the num_rooms property of the propertySchema. It is a number, it cannot be less than 1,
    and it is required. */
    num_rooms: {
        type: Number,
        min: [1, 'The number of rooms cannot be less than 1.'],
        required: [true, 'You must enter the number of rooms of the property']
    },
    /* Defining the rented property of the propertySchema. It is a boolean, and it is required. */
    rented: {
        type: Boolean,
        required: [true, 'You must indicate if the property is rented']
    },
    /* Defining the owner property of the propertySchema. It is a string, it cannot be less than 3
    letters, it cannot be longer than 30 letters, and it is required. */
    owner: {
        type: String,
        minlength: [3, 'The owners name must be at least 3 letters in length.'],
        maxlength: [30, 'The owners name must have a maximun of 30 letters.'],
        required: [true, 'You must insert the name of the property owner']
    },
    /* Validating the email address. */
    contact_email:
    {
        type: String,
        match: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        required: [true, 'You must insert the email of the property owner']
    }
});

/* Exporting the model to be used in other files. */
module.exports = mongoose.model('property', propertySchema, 'properties');