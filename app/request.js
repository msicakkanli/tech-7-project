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

function Timeline(name, screen_name, twit, image , retweet, favorite, time) {
    this.name = name;
    this.screen_name = screen_name;
    this.twit = twit;
    this.image = image;
    this.retweet = retweet;
    this.favorite = favorite;
    this.time = time; 
}

let finalTimeline = []

T.get('friends/list', { screen_name: 'thedonuil' , count: 5 },  function (err, data, response) {
   data.users.forEach(element => {
      let friends = new Friends(element.name, element.screen_name, element.profile_image_url)
       finalFriends.push(friends)
   });
   return finalFriends;
  })
 
T.get('statuses/home_timeline', { screen_name: 'thedonuil', count:5  }, function (err,data,response) {
    data.forEach(element => {
        let timeline = new Timeline(element.user.name, element.user.screen_name, element.text ,element.user.profile_image_url, element.retweet_count, element.favourites_count , element.created_at)
       finalTimeline.push(timeline);
    });
    return finalTimeline;
})  


module.exports.finalFriends = finalFriends; 
module.exports.finalTimeline = finalTimeline;

