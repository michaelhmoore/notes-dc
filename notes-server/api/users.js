const User = require('../models/user');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
// look at jwt documentation
const secret = 'secret';

//user register functioning properly
router.post('/register', async function(req, res) {
  const { username, password } = req.body;
  if (!username|| !password) {
    res.status(400).json( { error: 'Missing username and/or password'});
    return;
  }
  // add further validation if time
  const hash = await bcrypt.hash(password, 10);

  const newUser = new User({
    username: username,
    passwordHash: hash
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: 'Registration failed', error: err.message });
  }
});

//POST/login
router.post('/login', async function (req, res) {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  /*const pw = user.passwordHash;
  console.log(user.passwordHash)
  res.json({pw})*/
  
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ message: 'INvalid username or password'});
  }
  if (await bcrypt.compare(password, user.passwordHash)) {
    const token = jwt.encode({ username }, secret);
    res.json({ token : token});
  } else {
    res.json({error: 'Error'});
  }
    
});

module.exports = router;

