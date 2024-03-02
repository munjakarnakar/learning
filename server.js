const express = require('express');
const app = new express();


app.get('/',function(req, res){
    res.send('hello')
})

// setTimeout(() => {
//     console.log('hello')
// }, 1000);


app.listen(3001, ()=>{console.log('server running')})