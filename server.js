const express = require('express');
const path = require('path');
const app = express();
const port = 4242;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/heart.png', (req, res) => {
    res.sendFile(path.join(__dirname + '/heart.png'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})