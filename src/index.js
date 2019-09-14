import express from 'express';
import path  from 'path';
import bodyParser from 'body-parser';

const port = process.argv.slice(2)[0];
const app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
    res.end('pong')
});

app.listen(port || 3000, () => {
    console.log(`🚀 Running on port ${port || 3000}`);
});

module.exports = app;
module.exports.port = port;