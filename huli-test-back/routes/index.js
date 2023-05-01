const express = require('express');
const { validateLogin } = require('../middlewares/errorValidator');
const NotFound = require('../errors/notFound');
const auth = require('../middlewares/auth.js');

const router = express.Router();

const { login, aboutMe } = require('../controllers/login');
router.post('/signin', validateLogin, login);
router.get('/signin', auth, aboutMe);

const { charts } = require('../controllers/charts');
router.get('/charts', charts);

router.all('*', (req, res, next) => {
  next(new NotFound('Page not found'));
});

module.exports = router;