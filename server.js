var express = require("express");
var path = require("path");
var fs = require("fs");

// Express app start
var expressApp = express();
const PORT = process.env.PORT || 3001;

// Set up Express app to handle data and parsing of data
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(express.json());
expressApp.use(express.static("public"));

var note = [];

expressApp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

expressApp.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./otes.html"));
});
// To display all notes that have been made
expressApp.get("/api/notes", (req, res) => {
  return res.json(note);
});

expressApp.post("/api/notes", (req, res) => {
  var newNotes = req.body;
  note.push(newNotes);
  res.json(newNotes);
});

// Starts the server
expressApp.listen(PORT, () => {
  console.log(`API server is now listening on port ${PORT}!`);
});
