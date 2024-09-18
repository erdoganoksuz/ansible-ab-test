const express = require("express");
const app = express();

// Determine the port from the environment or command-line argument
const port = process.env.PORT || process.argv[2] || 3000;

// Middleware to log the version of the app
app.use((req, res, next) => {
  if (port == 3000) {
    req.version = "A"; // Version A running on port 3000
  } else if (port == 4000) {
    req.version = "B"; // Version B running on port 4000
  }
  console.log(`Serving Version ${req.version}`);
  next();
});

// A simple route for demonstration
app.get("/", (req, res) => {
  res.send(`Hello from Version ${req.version}`);
});

// Start the server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
