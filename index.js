const express = require("express");
const app = express();
const port = 4444;

function getfunc(req, res) {
    const musicJson = require("./music.json");
    //const music = JSON.parse(musicJson);
    console.log(musicJson.music[0]);
}

function putfunc(req, res){
    const musicJson = require("./music.json");
    console.log(musicJson.music);
}

function postfunc(req, res){
    const musicJson = require("./music.json");
    console.log(musicJson.music);
}

function deletefunc(req, res){
    const musicJson = require("./music.json");
    console.log(musicJson.music);
}

app.get('/', getfunc);
app.put('/', putfunc);
app.post('/', postfunc);
app.delete('/', deletefunc);
app.listen(port, () => console.log(`ur mom is listening at ${port}`));