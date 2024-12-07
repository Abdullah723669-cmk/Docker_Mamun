const express = require('express');
const path = require('path');
const app = express();
const port = 4000;


const replicaAPP = process.env.APP_NAME;

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request has served by ${replicaAPP}`);
});

app.listen(port, () => {
    console.log(`${replicaAPP} is lisenting on port ${port}`);
});