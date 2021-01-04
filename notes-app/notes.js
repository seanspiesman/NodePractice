const fs = require("fs");
const chalk = require("chalk");

// fs.writeFileSync("notes.txt", "hello, these are my notes");

const getNotes = () => {
  return fs.readFileSync("./notes.txt", { encoding: "utf8" });
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("new note added");
  } else {
    console.log("note title taken");
  }
};

const saveNotes = (notes) => {
  console.log({ notes });
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json").toString());
  } catch (e) {
    return [];
  }
};

const deleteNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => {
    return note.title !== title;
  });
  if (updatedNotes.length < notes.length) {
    saveNotes(updatedNotes);
    console.log(chalk.green.inverse("note removed"));
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

module.exports = { deleteNote, addNote };
