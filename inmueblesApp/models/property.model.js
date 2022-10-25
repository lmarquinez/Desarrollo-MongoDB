const mongoose = require('mongoose');
/* Creating a new schema object. */
const Schema = mongoose.Schema;

/* Creating a new schema object. */
const propertySchema = new Schema({
    floor: Number,
    letter: String,
    size: String,
    num_rooms: Number,
    rented: Boolean,
    owner: String,
    contact_email: String
});

/* Exporting the model to be used in other files. */
module.exports = mongoose.model('property', propertySchema, 'properties');