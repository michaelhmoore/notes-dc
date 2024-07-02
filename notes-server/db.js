const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/notes_db');
module.exports = mongoose;
