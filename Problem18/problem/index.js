// Please don't change the pre-written code

const express = require("express");
const server = express();

// Set custom header on response object
const setCustomHeader = (res , headerName, headerValue) => {
  // Write your code here
  // Set the custom header on the response object
  res.setHeader(headerName, headerValue);

  // Log a success message
  console.log(`${headerName} with value ${headerValue} has been set successfully!`);

};

// Route that uses the setCustomHeader function
server.get("/", (req, res) => {
  setCustomHeader(res, "Content-Type", "application/json");
  res.send(`get method called!`);
   // Log a success message
});

module.exports = { setCustomHeader, server };
