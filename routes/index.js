const path = require("path");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config");
const compiler = webpack(webpackConfig);
const keystone = require("keystone");


// Export our app routes
exports = module.exports = function(app) {
  // app.all('/api*', keystone.middleware.cors);
  // app.options('/api*', function(req, res) { res.send(200); });

  // HMR Setup !! DEV ONLY
  app.use(
    require("webpack-dev-middleware")(compiler, {
      hot: true,
      publicPath: webpackConfig[0].output.publicPath
    })
  );
  app.use(require("webpack-hot-middleware")(compiler));

  // Get request pointing to our api (test using postman)
  app.get("/", function(req, res) {
    // Render some simple boilerplate html
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });
};
