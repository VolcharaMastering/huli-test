const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AuthError = require('../errors/authError');
const ServerError = require('../errors/serverError');

//const User = require('../models/User');

const { OK_CODE } = require('../states/states');

const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            next(new AuthError('Incorrect user or password'));
            return;
        }
        const validUser = await bcrypt.compare(password, user.password);
        if (!validUser) {
            next(new AuthError('Incorrect user or password'));
            return;
        }
        const token = jwt.sign({
            _id: user._id,
        }, process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'dev-secret');
        res.status(OK_CODE).send({ data: user, token });
    } catch (e) {
        next(new ServerError('Server Error'));
    }
};

module.exports = { login };
