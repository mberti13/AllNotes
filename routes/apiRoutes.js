const fs = require('fs');
const express = require('express');
const { title } = require('process');

const router = express.Router();

const readFile = () =>{
    let notes = JSON.parse(fs.readFileSync('db/db.json'));
    return notes;
};

router.get('/notes', (req, res) =>{
    const notes = readFile();
    // console.log(notes);
    res.json(notes);
});

router.post('/notes', (req, res) =>{
    const notes = readFile();
    const note = req.body;
    const {title, text} = note;
    const newNote = { title, text, id:Math.random().toString()};
    notes.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(notes));
    res.json(newNote);
});

router.delete('/notes/:id', (req, res) =>{
    const notes = readFile();
    const updatedNotes = notes.filter(note => note.id !== req.params.id);
    fs.writeFileSync('db/db.json', JSON.stringify(updatedNotes));
    res.json({
        ok: true
    });
});

module.exports = router;