const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require('next-images')

// Why I set up like this
// https://dev.to/harveyjones282/the-simplest-way-to-configure-next-js-with-sass-3en
// https://github.com/zeit/next.js/issues/3852
module.exports = withCSS(
  withSass(
    withImages({
      webpack(config, options) {
     
        return config;
      }
    })
  )
);
