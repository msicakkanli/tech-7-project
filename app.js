//import { request } from 'https';

const express = require('express');
const bodyParser = require('body-parser');
const requests = require('./app/request.js');
const pug = require('pug');


const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
   res.render('layout')
   
   
  });



app.get('/friends', ( req, res) => {
    res.send(requests.finalFriends);
});

app.get('/tweets', ( req, res) => {
    res.send(requests.finalTimeline);
});

app.get('/messages', ( req, res) => {
    res.send(requests.finalDm);
});

app.get('/profile', (req, res) => {
    res.send(requests.finalProfile); 
    
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});

