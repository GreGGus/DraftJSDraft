import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Axios from 'axios';


// Param API Github
var id ="6f86dbb23476abc52f0f";
var sec="2e9c0918bbd5a75ec16573721ef42c85add4c9c3";
var param = "?client_id=" + id +"&client_secret=" + sec;


// Maninthemiddle
var url= "http://maninthemiddle.org/api/news";
// APIs call
function getUserInfo (username) {
  console.log("https://api.github.com/users/" + username + param);
  return Axios.get("https://api.github.com/users/"+username + param);
}

function getManinthemiddle(){
  console.log("Call"+url);
  return Axios.get(url);
}


var helps = {
  // Fonction récup' infos
  getPlayersInfos (players) {
    return Axios.all(players.map(function (username) {
      return getUserInfo(username)
    }))
    .then(function (info) {
      return info.map(function (user) {
        return user.data
      })
    })
    .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  },

  getManinthemiddleInfos(){
    return getManinthemiddle();
  }
};
/*
var helps = {
  getPlayersInfos(players){
    return Axios.all(players.map(function (username) {
      console.log(username);
      return getUserInfo(username)
    })).then(function (info) {
      return info.map(function (user){
        return user.data
      })
    }).catch(function (err){console.warn('Error in getPlayersInfos: ',err)})
  }
};
*/



export default helps;
