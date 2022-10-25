const router = require('express').Router();

router.get('/', async (req, res) => {

    res.send('I recover the properties');

});


module.exports = router;