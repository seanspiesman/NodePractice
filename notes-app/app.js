const chalk = require("chalk");
const yargs = require("yargs");
const { addNote, deleteNote } = require("./notes.js");

//yargs 1.0.0
yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new notes",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body ",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "removing a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    deleteNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "listing all notes",
  handler: () => {
    console.log("listing notes!");
  },
});

yargs.command({
  command: "read",
  describe: "reading all notes",

  handler: () => {
    console.log("reading notes!");
  },
});

yargs.parse();
