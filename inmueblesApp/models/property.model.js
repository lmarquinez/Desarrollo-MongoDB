const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    floor: Number,
    letter: String,
    size: String,
    num_rooms: Number,
    rented: Boolean,
    owner: String,
    contact_email: String
});

module.exports = mongoose.model('property', propertySchema, 'properties');