const express = require('express');
const config = require('./app/config');

const app = express();

app.get('/', (req, res) => {
   res.send('<h1>Express is working</h1>')
  
  });

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
    console.log(config.consumer_key);
});