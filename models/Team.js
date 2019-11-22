var keystone = require("keystone");
var Types = keystone.Field.Types;

// Creates list for team
var Team = new keystone.List("Team");

// Creates fields for team
// May be necessary to update these for pre and post popup about
Team.add({
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

Team.defaultColumns = "name, start_date, about, small_image";
Team.register();
