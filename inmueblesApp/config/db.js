const mongoose = require('mongoose');

/* Connecting to the database. */
mongoose.connect(process.env.MONGO_URL);