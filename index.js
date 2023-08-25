const express = require("express");
const app = express();
const port = 4444;

function meow(req, res) {
    const musicJson = require("./music.json");
    //const music = JSON.parse(musicJson);
    console.log(musicJson.music[0]);

}
meow();
app.get('/', meow)

app.listen(port, () => console.log(`ur mom is listening at ${port}`))