const express = require('express');
const { validateLogin } = require('../middlewares/errorValidator');
const NotFound = require('../errors/notFound');
const auth = require('../middlewares/auth');

const router = express.Router();

const { login } = require('../controllers/login');
router.post('/signin', validateLogin, login);
// const { charts } = require('../controllers/charts');

// router.get('/charts', auth, charts);

router.all('*', (req, res, next) => {
  next(new NotFound('Page not found'));
});

module.exports = router;