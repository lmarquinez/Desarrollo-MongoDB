const router = require('express').Router();

/* Importing the property model. */
const Property = require("../../models/property.model");

/* Importing the middleware function `checkFloor` from the file `middlewares.js` in the folder
`helpers`. */
const { checkFloor } = require("../../helpers/middlewares")

/* GET ALL PROPERTIES */
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.json({ Error: error.message, Message: 'There are no properties.' });
    }
});

/* GET A PROPERTY BY ID */
router.get('/:propertyId', async (req, res) => {
    const { propertyId } = req.params;
    try {
        const property = await Property.findById(propertyId);
        res.json(property);
    } catch (error) {
        res.json({ Error: error.message, Message: 'The property does not exist.' });
    }
});

/* CREATE A PROPERTY */
router.post("/", async (req, res) => {
    try {
        const properties = await Property.create(req.body);
        res.json(properties);
    } catch (error) {
        res.json({ Error: error.message });
    }
});

/* UPDATE A PROPERTY BY ID */
router.put('/:propertyId', async (req, res) => {
    const { propertyId } = req.params;
    try {
        const property = await Property.findByIdAndUpdate(propertyId, req.body, { new: true });
        res.json(property);
    } catch (error) {
        res.json({ Error: error.message, Message: 'The property does not exist.' });
    }
});

/* DELETE A PROPERTY BY ID */
router.delete('/:propertyId', async (req, res) => {
    const { propertyId } = req.params;
    try {
        const property = await Property.findByIdAndDelete(propertyId);
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.json({ Error: error.message, Message: 'The property does not exist.' });
    }
});

/* DELETE ALL PROPERTIES FROM ONE FLOOR */
router.delete('/all/floor=:num', checkFloor, async (req, res) => {
    const { num } = req.params;
    try {
        const result = await Property.deleteMany({ floor: { $eq: num } });
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.json({ Error: error.message });
    }
});

/* GET THE PROPERTIES OF ONE OWNER */
router.get('/owner/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const result = await Property.aggregate([
            { $match: { owner: { $regex: name, $options: 'i' } } },
            { $sort: { size: -1 } },
            { $project: { _id: 0, letter: 0, __v: 0 } }
        ]);
        if (result.length === 0)
            res.status(404).json({ Message: 'There is no property with that name.' })
        else
            res.json(result);
    } catch (error) {
        res.json({ Error: error.message });
    }
});

module.exports = router;