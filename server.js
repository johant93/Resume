const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/css',express.static(__dirname +'/css'));
//app.use('/js',express.static(__dirname +'/js'));

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});