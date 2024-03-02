const express = require('express');
const bodyparser = require('body-parser');
const formidable = require('express-formidable');

const app = new express();

app.use(formidable())
app.use(bodyparser.json())

app.get('/getdata/:id',(req, res) => {
    res.send('Running' + JSON.stringify(req.params))
})

app.get('/getdata',(req, res) => {
    res.send('Running' + JSON.stringify(req.query))
})

app.post('/post',(req, res) => {
    console.log(req.body)
    res.send();
})

app.post('/fileupload',(req, res) => {
    console.log(req.files.file, req.fields)
    res.end();
})

// setInterval(()=>{console.log('hello')}, 1000)

app.listen(3000, () => console.log('Server up'))