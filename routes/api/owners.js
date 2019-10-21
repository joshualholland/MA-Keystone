var keystone = require('keystone');

// Gets our Stylist list
var Owner = keystone.list('Owner');

// Create API endpoint
exports.list = function (req, res) {
    Owner.model.find(function (err, items) {
        // Handle Errors
        if (err) return res.apiError('database error', err);
        // Handle Respones
        res.apiResponse({
            owners: items
        });
    });
};