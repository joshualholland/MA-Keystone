var keystone = require('keystone');
// Get Services list
var Services = keystone.list('Services');

// Create API endpoint
exports.list = function (req, res) {
    Services.model.find(function (err, items) {
        // Handle Errors
        if (err) return res.apiError('database error', err);
        // Handle Respones
        res.apiResponse({
            services: items
        });
    });
}
