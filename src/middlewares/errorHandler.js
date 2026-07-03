const ApiError = require("../utils/ApiError");

// Central error handler. Converts known error types (Mongoose validation,
// CastError, our own ApiError) into a consistent JSON shape.
const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || (res.statusCode !== 200 ? res.statusCode : 500);
  let message = err.message || "Internal Server Error";
  let errors = err.errors || [];

  // Mongoose validation error -> 400 with field-level messages
  if (err.name === "ValidationError") {
    statusCode = 400;
    errors = Object.values(err.errors).map((e) => ({
      field: e.path,
      message: e.message,
    }));
    message = "Validation failed";
  }

  // Mongoose bad ObjectId / cast error -> 400
  if (err.name === "CastError") {
    statusCode = 400;
    message = `Invalid value for field: ${err.path}`;
  }

  // Duplicate key error (e.g. unique trackingId collision) -> 409
  if (err.code === 11000) {
    statusCode = 409;
    message = `Duplicate value for field: ${Object.keys(err.keyValue).join(", ")}`;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors,
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

module.exports = errorHandler;
