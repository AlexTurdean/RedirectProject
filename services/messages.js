var messages = [
    {id: 1, message: "Message #1 by Alex", userId: 1},
    {id: 2, message: "Message #2 by Lukas", userId: 2},
    {id: 3, message: "Message #3 by Peter", userId: 3},
];

var service = {};

service.find = (messageId) => {
    return messages.find(message => message.id == messageId);
}

module.exports = service;
