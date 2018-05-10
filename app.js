console.log("starting app.js");

const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

var argv = yargs.argv;
var command = argv._[0];

if(command == "add") {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log("Note created");
        console.log("----");
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log("Note title taken");
    }
} else if(command == "list") {
    notes.getAll();
} else if(command == "read") {
    notes.getNote(argv.title);
} else if(command == "remove") {
    notes.removeNote(argv.title);
} else {
    console.log('Command not found');
}