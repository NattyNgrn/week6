import musicObj from "./music.js";

const express = require("express");
const app = express();
const port = 4444;

const foglake = {
"song": "Serotonin",
"artist": "Fog Lake",
"year": 2018,
"album": "Captain"
};

function getfunc(req, res) {
    res.send(musicObj)
    console.log(musicObj);
}

// API
//API will be album
//update the song in the album for put
//add album with song and info for post
//delete album

function putfunc(req, res){
    const reqObj = req.body();
    const reqalbum = reqObj.album;
    const reqsong = reqObj.song;
    musicObj[reqalbum].song = reqsong;
    console.log(musicJson.music);
    res.send(musicObj);
}

function postfunc(req, res){
    res.send
    console.log(musicJson.music);
}

function deletefunc(req, res){
    console.log(musicJson.music);
}

getfunc();
app.get('/', getfunc);
app.put('/', putfunc);
app.post('/', postfunc);
app.delete('/', deletefunc);
app.listen(port, () => console.log(`ur mom is listening at ${port}`));