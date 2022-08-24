var express = require("express");
var path = require("path");
var fs = require("fs");

// Express app start
var app = express();
const PORT = process.env.PORT || 3001;

// Set up Express app to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("assets"));
app.use(express.static("public"));

var note = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
