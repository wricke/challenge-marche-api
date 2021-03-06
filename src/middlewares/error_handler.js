const httpStatus = require('http-status-codes');
const { error: errorHelper } = require('../helpers');

module.exports = (err, _, res) => {
  if (err.name in httpStatus) {
    return res.status(httpStatus[err.name]).json(errorHelper(err.name, err.message));
  }

  console.error(err);

  const internalError = errorHelper();

  return res.status(internalError.status).json(internalError);
};
