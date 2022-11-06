// Imports
const express = require('express')
const app = express()
const port = 3000

// Static Files
app.use(express.static('.'));

// Navigation
app
    .get('/', function (req, res) {
        res.sendFile('index.html');
    });

app.listen(port, () => console.info(`App listening on port ${port}`))