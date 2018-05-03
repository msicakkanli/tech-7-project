const express = require('express');
const app = express();
const Twit = require('twit');
const bodyParser = require('body-parser');

const config = require('./config')

const T = new Twit(config);


function Friends(name, screen_name, image) {
    this.name = name;
    this.screen_name = screen_name;
    this.image = image;
  }

let finalFriends = []

function Timeline(name, screen_name, twit, image) {
    this.name = name;
    this.screen_name = screen_name;
    this.twit = twit;
    this.image = image;
}

let finalTimeline = []
/*
T.get('friends/list', { screen_name: 'thedonuil' , count: 5 },  function (err, data, response) {
   data.users.forEach(element => {
      let friends = new Friends(element.name, element.screen_name, element.profile_image_url)
       finalFriends.push(friends)
   });
   return finalFriends;
  })
 */
T.get('statuses/home_timeline', { screen_name: 'thedonuil' , count: 1 }, function (err,data,response) {
    console.log(data);
})  

module.exports.finalFriends = finalFriends; 
