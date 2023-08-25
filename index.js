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
    const reqObj = req.body();
    const reqalbum = reqObj.album; 
    res.send(musicObj[reqalbum]);
    console.log(reqalbum);
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
    console.log(musicObj);
    res.send(musicObj);
}

function postfunc(req, res){
    const reqObj = req.body();
    const reqalbum = reqObj.album;
    musicObj[reqalbum] = {song: "a cool song"};
    res.send(musicObj);
    console.log(musicObj);
}

function deletefunc(req, res){
    const reqObj = req.body();
    const reqalbum = reqObj.album;
    delete musicObj[reqalbum];
    res.send(musicObj);
    console.log(musicJson.music);
}

getfunc();
app.get('/', getfunc);
app.put('/', putfunc);
app.post('/', postfunc);
app.delete('/', deletefunc);
app.listen(port, () => console.log(`ur mom is listening at ${port}`));