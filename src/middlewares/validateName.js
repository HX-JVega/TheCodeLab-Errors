const { ClientError } = require("../utils/errors");

const validateName = (req, res, next) => {
  const { name } = req.query;
  if (name && name.includes("@")) throw new ClientError("Invalid name");
  next();
};

module.exports = validateName;
