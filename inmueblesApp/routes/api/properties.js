const router = require('express').Router();

/* Importing the property model. */
const Property = require("../../models/property.model");

router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.json({ Error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const properties = await Property.create(req.body);
        res.json(properties);
    } catch (error) {
        res.json({ Error: error.message });
    }
});

router.put('/:propertyId', async (req, res) => {
    const { propertyId } = req.params;
    try {
        const property = await Property.findByIdAndUpdate(propertyId, req.body, { new: true });
        res.json(property);
    } catch (error) {
        res.json({ Error: error.message });
    }
});

router.delete('/:propertyId', async (req, res) => {
    const { propertyId } = req.params;
    try {
        const property = await Property.findByIdAndDelete(propertyId);
        res.json(property);
    } catch (error) {
        res.json({ Error: error.message });
    }
});


module.exports = router;