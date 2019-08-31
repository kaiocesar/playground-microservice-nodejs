const express = require('express');
const path  = require('path');
const bodyParser = require('body-parser');

const port = process.argv.slice(2)[0];
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('Returning books list');
    const data = [];
    res.send(data);
});

console.log(`Running on port ${port}`);
app.listen(port);