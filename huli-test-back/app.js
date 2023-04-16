require('dotenv').config();
const express = require('express'); // this is express
const { errors } = require('celebrate'); //this is ma validation library
const helmet = require('helmet'); //this is my security library. defending from CSRF, MIME sniffing, XSS and so on.
const cors = require('cors'); // cross-domain security. Here it is off
const rateLimit = require('./utils/rateLimit'); // limit of requests to API. Say no to DDos
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
