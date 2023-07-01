const response = (res, statusCode, data) => {
  res.status(statusCode).json({
    error: false,
    data,
  });
};

module.exports = response;
