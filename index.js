const express = require("express");
const app = express();

// Middleware to check the 'X-Version' header
app.use((req, res, next) => {
  // Default version is A
  req.version = req.headers["x-version"] || "A";
  next();
});

// A simple route for demonstration
app.get("/", (req, res) => {
  if (req.version === "A") {
    res.send("Hello from Version A");
  } else if (req.version === "B") {
    res.send("Hello from Version B");
  } else {
    res.status(400).send("Invalid version header");
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
