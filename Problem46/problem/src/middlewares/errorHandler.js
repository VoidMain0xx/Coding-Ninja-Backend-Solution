// Please don't change the pre-written code
// Import the necessary modules here
import { logger } from "./logger.middleware.js";

export class customErrorHandler extends Error {
  // Write your code here
  constructor(statusCode , errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  // Write your code here
  if (err instanceof customErrorHandler) {
    const error_to_log = `TimeStamp : ${new Date().toString()} req URL : ${req.originalUrl} error Message : ${err.message}`;
    logger.error(error_to_log);
    res.status(err.statusCode).send(err.message);
  }else{
    const error_to_log = `TimeStamp : ${new Date().toString()} req URL : ${req.originalUrl} error Message :Oops! Something went wrong... Please try again later!`;
    logger.error(error_to_log);
    res.status(500).send("Oops! Something went wrong... Please try again later!");
  }
};
