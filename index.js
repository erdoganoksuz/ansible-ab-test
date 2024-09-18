const express = require("express");
const app = express();

// Use environment variable to set the version
const version = process.env.APP_VERSION || "A"; // Default to version A

app.get("/", (req, res) => {
  res.send(`Hello from Version ${version}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}, Version ${version}`);
});
