const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/notes', require('./api/notes'));
app.use('/api/users', require('./api/users'))

const port = 8000;
app.listen(port, () => console.log(`server listening on port ${port}`));

module.exports = app;
