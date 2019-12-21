var keystone = require('keystone');
// Get Services list
var ColorServices = keystone.list('Color_Services');

// Create API endpoint
exports.list = function (req, res) {
    ColorServices.model.find(function (err, items) {



        // Handle Errors
        if (err) return res.apiError('database error', err);
        // Handle Respones
        res.apiResponse({
            services: items
        });
    });
}