const express = require('express');
const path = require('path');

const router = express.Router();

// HTML route for default landing page to be index.html
router.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// HTML route for note.html for/notes
router.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;