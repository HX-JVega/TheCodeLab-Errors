class ClientError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.statusCode = status;
  }
}

module.exports = { ClientError };
