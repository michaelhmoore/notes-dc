const db = require('../db');

const User = db.model('User', {
  username: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true},
  userSince: { type: Date, default: Date.now }
  // do we need anything else here
});

module.exports = User;