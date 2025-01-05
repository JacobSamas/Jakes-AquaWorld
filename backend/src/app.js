const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { errorHandler } = require('./middleware/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

const corsOptions = require('./config/corsOptions');
app.use(cors(corsOptions));

app.use(morgan('combined'));

app.use('/api', routes);

app.use(errorHandler);

module.exports = app;
