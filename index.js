const express = require('express');
const bodyParser = require('body-parser');
//const config = require('./app/config');
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

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});

app.get('/friends', ( req, res) => {
    res.send(requests.finalFriends);
});

