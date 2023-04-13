const errorHandler = (err, req, res, next) => {
  const { code = 500, message } = err;

  res.status(code).send({
    message: code === 500 ? 'Server Error' : message,
  });

  next();
};
module.exports = errorHandler;
