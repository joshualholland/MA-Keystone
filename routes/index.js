const keystone = require("keystone");
// Import our API routes with keystone importer
var importRoutes = keystone.importer(__dirname);
const bodyParser = require("body-parser");
const middleware = require('./middleware.js');


var routes = {
  api: importRoutes("./api")
};

// Setup Route Bindings
module.exports = nextApp => keystoneApp => {
  // Next request handler
  const handle = nextApp.getRequestHandler();

  keystoneApp.use(bodyParser.json());

  // keystoneApp.get("/admin",middleware.requireUser, middleware.adminView);
  keystoneApp.get("/admin", function (req, res) {
    res.redirect("/keystone");
  })

  keystoneApp.get("/api/bridals", keystone.middleware.api, routes.api.bridal.list);
  keystoneApp.get("/api/services", keystone.middleware.api, routes.api.services.list);
  keystoneApp.get("/api/stylists", keystone.middleware.api, routes.api.stylists.list);
  keystoneApp.get("/api/team", keystone.middleware.api, routes.api.team.list);
  keystoneApp.get("/api/owners", keystone.middleware.api, routes.api.owners.list)
  keystoneApp.get("/api/color-services", keystone.middleware.api, routes.api.color.list);
  keystoneApp.get("/api/other-services", keystone.middleware.api, routes.api.other.list);

  // Sends to MailChimp API
  keystoneApp.post("/api/careers", middleware.mailgunCareers);

  // Sends to MailChimp API
  keystoneApp.post("/api/contact", middleware.mailgunContact);

  keystoneApp.get("*", (req, res) => {
    return handle(req, res);
  });
};
