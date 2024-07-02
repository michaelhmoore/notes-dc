const db = require('../db');
const mongoose = require('mongoose');

const Note = db.model('Note', {
  title: { type: String, default: 'untitled'},
  text: { type: String, required: true },
  posted: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = Note;