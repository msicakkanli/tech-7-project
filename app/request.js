const express = require('express');
const app = express();
const Twit = require('twit');
const bodyParser = require('body-parser');

const config = require('./config')

const T = new Twit(config);

let finalTimeline = []
let finalFriends = []
let finalDm = []
let finalProfile = []


function Friends(name, screen_name, image) {
    this.name = name;
    this.screen_name = screen_name;
    this.image = image;
}

function Timeline(name, screen_name, twit, image , retweet, favorite, time) {
    this.name = name;
    this.screen_name = screen_name;
    this.twit = twit;
    this.image = image;
    this.retweet = retweet;
    this.favorite = favorite;
    this.time = time; 
}

function Dm(name, image, text) {
    this.name = name;
    this.image = image;
    this.text = text;
}

function Profile(name, image) {
    this.name = name;
    this.image = image;
    
}



T.get('friends/list', { screen_name: 'thedonuil' , count:5 },  function (err, data, response) {
   data.users.forEach(element => {
      let friends = new Friends(element.name, element.screen_name, element.profile_image_url)
       finalFriends.push(friends)
   });
   return finalFriends;
  })
 
T.get('statuses/home_timeline', { screen_name: 'thedonuil', count:5 }, function (err,data,response) {
    data.forEach(element => {
        let timeline = new Timeline(element.user.name, element.user.screen_name, element.text ,element.user.profile_image_url, element.retweet_count, element.user.favourites_count , element.created_at)
       finalTimeline.push(timeline);
    });
    return finalTimeline;
})  

T.get('direct_messages/sent',{ screen_name: 'thedonuil', count:5 }, function (err,data,response) {
  data.forEach(element => {
      let dm = new Dm(element.recipient.screen_name,element.recipient.profile_image_url, element.text)
    finalDm.push(dm);
  })
  return finalDm;
})



T.get('users/show',{ screen_name: 'thedonuil' }, function (err,data,response) {
 let name = data.screen_name;
 let image = data.profile_image_url;
 let profile = new Profile(name,image);
 finalProfile.push(profile);
 return finalProfile;
  })

module.exports.finalFriends = finalFriends; 
module.exports.finalTimeline = finalTimeline;
module.exports.finalDm = finalDm;
module.exports.finalProfile = finalProfile;


