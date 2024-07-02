const Note = require('../models/note');
const router = require('express').Router();

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
  /*Note.findById(req.params.id, function(err, note) {
    if (err) {
      res.status(400).send(err);
    }
    else if (note === null) {
      res.sendStatus(404);
    }
    else {
      res.json(note);
    }
  });*/
});

router.post('/', async function(req,res) {
  try {
    const note = new Note(req.body);
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put("/:id", function(req, res) {
  const notePart = req.body;
  Note.updateOne({ _id: req.params.id }, notePart, 
     { runValidators: true }, function(err, result) {
     if (err) {
        res.status(400).send(err);
     } 
     else if (result.matchedCount === 0) {
        res.sendStatus(404);
     } 
     else {
        res.sendStatus(204);
     }
  });
});

router.delete("/:id", function(req, res) {
  Message.deleteOne({ _id: req.params.id }, function(err, result) {
     if (err) {
        res.status(400).send(err);
     } 
     else if (result.matchedCount === 0) {
        res.sendStatus(404);
     } 
     else {
        res.sendStatus(204);
     }
  });
});

module.exports = router;