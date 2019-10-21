var keystone = require('keystone');

// Gets our Stylist list
var Stylist = keystone.list('Stylist');

// Create API endpoint
exports.list = function (req, res) {
    Stylist.model.find(function (err, items) {
        // Handle Errors
        if (err) return res.apiError('database error', err);
        // Handle Respones
        res.apiResponse({
            stylists: items
        });
    });
};