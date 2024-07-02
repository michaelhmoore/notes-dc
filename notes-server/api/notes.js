const Note = require('../models/note');
const router = require('express').Router();

//get all notes: ✅
router.get('/', async function(req, res) {
  console.log('/GET request succeeded')
  try {
    console.log('/GET request successful');
    const notes = await Note.find().sort('-posted').exec();
    res.json(notes)
  } catch (err) {
    res.status(400).send(err)
  }
});

// get notes by id: ✅
router.get('/:id', async function (req,res) {
  try {
    const note = await Note.findById(req.params.id).exec();
    if (!note) {
      res.sendStatus(404);
    } else {
      res.json(note);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

//post new note: ✅
router.post('/', async function(req,res) {
  try {
    const note = new Note(req.body);
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(400).send(err);
  }
});

//update note: ✅
router.put("/:id", async function(req, res) {
  const notePart = req.body;
  try {
    const result = await Note.updateOne({ _id: req.params.id }, notePart, { runValidators: true });
    if (result.matchedCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    } 
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/:id", async function(req, res) {
  try {
    const result = await Note.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err); 
  }
});

module.exports = router;