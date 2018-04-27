const express = require('express');
//const config = require('./app/config');
const pug = require('pug');

const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
   res.render('index')
  });

app.listen(5000, () => {
    console.log('The application is running on localhost:5000!')
});

