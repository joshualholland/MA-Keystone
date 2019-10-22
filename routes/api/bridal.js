const keystone = require('keystone');

// Get Bridal services list
var Bridal = keystone.list('Bridal');

// Create API endpoint
exports.list = function (req, res) {
    Bridal.model.find(function (err, items) {
        // Handle Errors
        if (err) return res.apiError('database error', err);
        // Handle Respones
        res.apiResponse({
            bridals: items
        });
    });
}
