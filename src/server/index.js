const path = require('path');
const cors = require('cors');
const express = require('express');
const apiResponse = require('./aylienAPI.js');

const app = express();
const port = 8083;

app.use(cors());
app.use(express.json());
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/analyse', function (req, res) {
    const url = req.body.url;
    apiResponse(url, (response, writer = res)=>{
        writer.send(response);
    });
})

app.listen(port, ()=>{
    console.log(`NLP app listening on port ${port}!`);
})