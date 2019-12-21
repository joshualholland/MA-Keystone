var keystone = require('keystone');
// Get Services list
var OtherServices = keystone.list('Other_Services');

// Create API endpoint
exports.list = function (req, res) {
    OtherServices.model.find(function (err, items) {

        // Handle Errors
        if (err) return res.apiError('database error', err);
        // Handle Respones
        res.apiResponse({
            services: items
        });
    });
}