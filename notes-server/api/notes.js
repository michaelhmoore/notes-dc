const { text } = require('express');
const Note = require('../models/note');
const router = require('express').Router();
const jwt = require('jwt-simple');
const secret = 'secret'

//authntication middleware
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.decode(token, secret);
    if (!decoded.userId) {
      throw new Error('invalid token: userid not found');
    }
    req.userId = decoded.userId; 
    next();
  } catch (err) {
    console.error(err)
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

//get all notes: ✅
router.get('/', verifyToken, async function(req, res) {
  console.log('/GET request succeeded')
  try {
    console.log('/GET request successful');
    const notes = await Note.find({ userId: req.userId}).sort('-posted').exec();
    res.json(notes)
  } catch (err) {
    console.error(err)
    res.status(500).json({message: 'server rror' });
  }
});

// get notes by id: ✅
router.get('/:id', verifyToken, async function (req,res) {
  try {
    const note = await Note.findById(req.params.id).exec();
    if (!note) {
      res.sendStatus(404);
    } else {
      res.json(note);
    }
  } catch (err) {
    res.status(500).json({  message: 'internal server error'});
  }
});

//post new note: ✅
router.post('/', verifyToken, async function(req,res) {
  try {
    const { title, text } = req.body;
    const note = new Note({
      title: title || 'untitled',
      text: text,
      userId: req.userId
    });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (err) {
    console.error(err)
    res.status(500).json({message: 'internal server error'});
  }
});

//update note: ✅
router.put("/:id", verifyToken, async function(req, res) {
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

router.delete("/:id", verifyToken, async function(req, res) {
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