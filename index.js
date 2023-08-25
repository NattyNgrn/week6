const express = require("express");
const app = express();
const port = 4444;

function meow(req, res) {
    res.send("hullo");
}
app.get('/', meow)

app.listen(port, () => console.log(`ur mom is listening at ${port}`))