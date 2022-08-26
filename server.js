var express = require("express");
var path = require("path");
var fs = require("fs");

// Express app start
var app = express();
const PORT = process.env.PORT || 3001;

// Set up Express app to handle data and parsing of data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var note = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
// To display all notes that have been made
app.get("/api/notes", (req, res) => {
  return res.json(note);
});

app.post("/api/notes", (req, res) => {
  var newNotes = req.body;
  note.push(newNotes);
  res.json(newNotes);
});

// Starts the server
app.listen(PORT, () => {
  console.log(`API server is now listening on port ${PORT}!`);
});
