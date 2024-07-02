const db = require('../db');

const User = db.model('User', {
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true},
  posted: { type: Date, default: Date.now }
});

module.exports = Note;