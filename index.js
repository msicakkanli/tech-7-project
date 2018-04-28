const express = require('express');
//const config = require('./app/config');
const pug = require('pug');


const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/', (req, res) => {
   res.render('layout')
  });

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});

