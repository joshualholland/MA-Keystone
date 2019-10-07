const keystone = require("keystone");
// Import our API routes with keystone importer
var importRoutes = keystone.importer(__dirname);
var routes = {
	api: importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {

	// Next request handler
	const handle = nextApp.getRequestHandler();
	// Gets Bridal data
	keystoneApp.get('/api/bridal', keystone.middleware.api, routes.api.bridal.list);
	// Service data
	keystoneApp.get('/api/services', keystone.middleware.api, routes.api.services.list);
	// Stylist data
	keystoneApp.get('/api/stylist', keystone.middleware.api, routes.api.stylists.list);
	// Team data
	keystoneApp.get('/api/team', keystone.middleware.api, routes.api.team.list);

	console.log(routes);

	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
}
