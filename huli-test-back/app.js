require('dotenv').config();
const express = require('express');
const { errors } = require('celebrate');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('./utils/rateLimit');
const errorHandler = require('./middlewares/errorHandler');
const NotFound = require('./errors/notFound');

const app = express();
const { PORT = 3000, NODE_ENV } = process.env;

app.use(cors());
app.use(express.json());
app.use(helmet());
app.disable('x-powered-by');

app.use(rateLimit);

app.use(require('./routes/index'));

app.use('*', (req, res, next) => {
  next(new NotFound('Page not found'));
});
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});
