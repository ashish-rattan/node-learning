console.log("starting app.js");

const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

var argv = yargs.argv;
var command = argv._[0];

if(command == "add") {
    let note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log("Note created");
        notes.logNote(note);
    } else {
        console.log("Note title taken");
    }
} else if(command == "list") {
    notes.getAll();
} else if(command == "read") {
    let note = notes.getNote(argv.title);
	if(note) {
		console.log("Note found");
       notes.logNote(note);
	} else {
		console.log("Note not found");
	}
} else if(command == "remove") {
    var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? "Note was removed" : "Note not found";
	console.log(message);
} else {
    console.log('Command not found');
}