console.log("Starting notes.js");

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    }

    try{
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    } catch(e) {

    }

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length == 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
        console.log("Note added");
    } else {
        console.log("Duplicate note");
    }
};

var getAll = () => {

}

var getNote = (title) => {

};

var removeNote = (title) => {

}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}