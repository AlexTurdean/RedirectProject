const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/:msgId", (req, res) => {
    res.send("The message does not exist, you can create it from here");
})

module.exports = app;
