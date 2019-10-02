var keystone = require('keystone');

// Gets our Stylist list
var Team = keystone.list('Team');

// Create API endpoint
exports.list = function (req, res) {
    Team.model.find(function (err, items) {
        // Handle Errors
        if (err) return res.apiError('database error', err);
        // Handle Respones
        res.apiResponse({
            team: items
        });
    });
};