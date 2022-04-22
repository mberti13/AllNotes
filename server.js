
const path = require('path');
const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes.js');

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


app.use('/api', apiRoutes);

//route for notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

//wildcard route to catch invalid requests(nonexistent URL locations) and send back to index
//Wildcards should always come last in requests
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//Creates API Server at Port 3001
app.listen(PORT, () =>{
    console.log(`API server now on port ${PORT}!`);
});

