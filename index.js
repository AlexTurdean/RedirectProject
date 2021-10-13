const express = require("express");
const vhost = require("vhost");
const dotenv = require("dotenv");
const editApp = require("./edit.app");
const msgApp = require("./msg.app");
const newApp = require("./new.app");
const userService = require("./services/users");
const messageService = require("./services/messages");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
const mainDomain = "localhost";
const newDomain = process.env.NEWDOMAIN || "localhost";
const editDomain = process.env.EDITDOMAIN || "localhost";
const msgDomain = process.env.MSGDOMAIN || "localhost";

app.get('/:msgId', (req, res) => {
    const userId = req.header("UserId") || req.query.userId;
    const msgId = req.params.msgId;

    const user = userService.find(userId);
    const message = messageService.find(msgId);

    if(message == undefined) {
        res.status(302).redirect("http://"+ newDomain +":"+ PORT +"/"+ msgId);
    }
    else if(user != undefined && user.id == message.userId) {
        res.status(302).redirect("http://"+ editDomain +":"+ PORT +"/"+ msgId);
    }
    else {
        res.status(302).redirect("http://"+ msgDomain +":"+ PORT +"/"+ msgId);
    }
})

express()
.use(vhost(mainDomain, app))
.use(vhost(editDomain, editApp))
.use(vhost(msgDomain, msgApp))
.use(vhost(newDomain, newApp))
.listen(PORT);
