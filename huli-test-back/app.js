const express = require('express');
const { errors } = require('celebrate');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

const port = 3000
app.use(cors());
app.use(express.json());
app.use(helmet());
app.disable('x-powered-by');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
connect();
