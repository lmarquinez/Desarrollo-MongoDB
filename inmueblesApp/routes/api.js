var express = require('express');
var router = express.Router();

/* Telling the router to use the `/inmuebles` route to access the `inmuebles` module. */
router.use('/inmuebles', require('./api/inmuebles'));

module.exports = router;