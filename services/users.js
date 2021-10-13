var users = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Lukas'},
    {id: 3, name: 'Peter'}
];

var service = {};

service.find = (userId) => {
    return users.find(user => user.id == userId);
}

module.exports = service;
