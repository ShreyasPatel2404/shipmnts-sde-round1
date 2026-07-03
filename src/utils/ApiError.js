class ApiError extends Error {
  constructor(statusCode, message, errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors; // for field-level validation errors
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;