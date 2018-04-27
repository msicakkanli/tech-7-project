const express = require('express');
const config = require('./app/config');

const app = express();
let server = require('https').Server(app);
var port = process.env.PORT || 8000

app.get('/', (req, res) => {
   res.send('<h1>Express is working</h1>')
  });

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});

server.listen(port, function() {
    console.log("App is running on port " + port);
});