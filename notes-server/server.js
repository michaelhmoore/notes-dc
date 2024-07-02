const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/notes', require('./api/notes'));

const port = 8000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;
