const db = require('../db');

const Note = db.model('Note', {
  title: { type: String},
  text: { type: String, required: true },
  posted: { type: Date, default: Date.now }
});

module.exports = Note;