const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AuthError = require('../errors/authError');
const ServerError = require('../errors/serverError');
const { mockUser } = require('../models/mockUser');


const { OK_CODE } = require('../states/states');

const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = mockUser.email === email ? mockUser : undefined;
        if (!user) {
            next(new AuthError('Incorrect user or password'));
            return;
        }
        const validUser = mockUser.password === password ? true : false;
        if (!validUser) {
            next(new AuthError('Incorrect user or password'));
            return;
        }
        const token = jwt.sign({
            email: user.email,
        }, process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'dev-secret');
        res.status(OK_CODE).send({ data: user, token });
    } catch (e) {
        next(new ServerError('Server Error'));
    }
};

const aboutMe = async (req, res, next) => {
    const myEmail = req.user.email;
    console.log(myEmail)
    try {
      const me = await mockUser.email === myEmail ? mockUser : undefined;;
      if (!me) {
        next(new NotFound('Такого пользователя нет'));
        return;
      }
      res.status(OK_CODE).send(me);
    } catch (e) {
      next(new ServerError('Произошла ошибка на сервере'));
    }
  };

module.exports = { login, aboutMe };
