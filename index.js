const express = require("express");
const app = express();
const port = 4444;
const fs = require("fs")


const foglake = {
"song": "Serotonin",
"artist": "Fog Lake",
"year": 2018,
"album": "Captain"
};


function getfunc(req, res) {
    const musicJson = fs.readFileSync("./music.json");
    const musicObj = JSON.parse(musicJson);
    res.send(musicObj.music[0])
    console.log(musicObj.music[0]);
}
// API
"""
{
    "song" : songname
    "number": Number
}
"""

function putfunc(req, res){
    const musicJson = fs.readFileSync("./music.json");
    const musicObj = JSON.parse(musicJson);
    const reqObj = JSON.parse(req);
    const song = reqObj.song;
    const number = reqObj.number;
    musicObj.music
    console.log(musicJson.music);
}

function postfunc(req, res){
    const musicJson = require("./music.json");
    res.send
    console.log(musicJson.music);
}

function deletefunc(req, res){
    const musicJson = require("./music.json");
    console.log(musicJson.music);
}

getfunc();
app.get('/', getfunc);
app.put('/', putfunc);
app.post('/', postfunc);
app.delete('/', deletefunc);
app.listen(port, () => console.log(`ur mom is listening at ${port}`));