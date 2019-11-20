var keystone = require("keystone");
var Types = keystone.Field.Types;

// Creates list for stylists
var Stylist = new keystone.List("Stylist");

Stylist.add({
  name: { type: Types.Name, required: true },
  start_date: { type: Types.Date },
  about: { type: Types.Text },
  small_image: {
    type: Types.CloudinaryImage,
    whenExists: "overwrite",
    generateFilename: function(file) {
      var originalname = file.originalname;
      return `${originalname}`;
    }
  },
  large_image: {
    type: Types.CloudinaryImage,
    whenExists: "overwrite",
    generateFilename: function(file) {
      var originalname = file.originalname;
      return `${originalname}`;
    },
    service: { type: String },
    price: { type: String }
  },
  services: {type: Types.TextArray},
  prices: {type: Types.TextArray}
});

Stylist.defaultColumns = "name, start_date, about, small_image";
Stylist.register();
