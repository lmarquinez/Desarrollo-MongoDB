var express = require('express');
var router = express.Router();

/* Telling the router to use the `/inmuebles` route to access the `inmuebles` module. */
router.use('/properties', require('./api/properties'));

module.exports = router;