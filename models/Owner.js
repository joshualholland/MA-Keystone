var keystone = require("keystone");
var Types = keystone.Field.Types;

// Creates list for owners
var Owner = new keystone.List("Owner");

// Creates fields for stylists
// May be necessary to update these for pre and post popup about
Owner.add({
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
    }
  }
});

Owner.defaultColumns = "name, start_date, about, small_image";
Owner.register();
