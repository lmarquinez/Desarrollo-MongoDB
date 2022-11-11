const Property = require("../models/property.model");

const checkFloor = async (req, res, next) => {
    const { num } = req.params;
    /* Checking if the floor number exists. */
    const count = await Property.countDocuments(
        { floor: { $eq: num } }
    );
    if (count > 0) {
        /* A function that is used to pass control to the next middleware function. */
        next();
    } else {
        res.status(404).json({ Message: 'There is no property in that floor.' })
    }
};

const checkOwner = async (req, res, next) => {
    const { name } = req.params;
    /* Checking if the owner name exists. */
    const count = await Property.countDocuments(
        { owner: { $regex: name, $options: 'i' } }
    );
    console.log(count);
    if (count > 0) {
        /* A function that is used to pass control to the next middleware function. */
        next();
    } else {
        res.status(404).json({ Message: 'There is no property with that name.' })
    }
};

module.exports = {
    checkFloor, checkOwner
}