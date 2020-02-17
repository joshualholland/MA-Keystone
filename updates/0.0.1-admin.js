var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function (done) {
    new User.model({
        name: { first: 'dev', last: 'admin'},
        email: 'joshualholland@gmail.com',
        password: 'admin'
    }).save(done);
};