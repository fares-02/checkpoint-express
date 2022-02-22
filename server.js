const express = require("express");
const check = require("./middleware/middleware");

const app = express();
app.use(check);

app.use(express.static("view"));

const port = 5000;

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server is running");
});
