const express = require('express');
const path  = require('path');
const bodyParser = require('body-parser');

const port = process.argv.slice(2)[0];
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const data = [{
        id: 1,
        isbn: "123456789321654987",
        title: "Node js on the fly 123"
    }];
    res.send(data);
});

console.log(`🚀 Running on port ${port}`);
app.listen(port);