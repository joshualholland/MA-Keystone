var keystone = require("keystone");
var Types = keystone.Field.Types;

var Cloud = new keystone.List("Cloud", {
  autokey: { from: "name", path: "key", unique: true }
});

Cloud.add({
  name: { type: String, required: true },
  // state: {type: Types.Select, options: 'draft,published',default:'draft'},
  image: {
    type: Types.CloudinaryImage,
    generateFilename: function(file) {
      var originalname = file.originalname;
      // return `${filenameWithoutExtension}-${timestamp}`;
      return `${originalname}`
    }
  }
});
//https://github.com/keystonejs/keystone/issues/4568

Cloud.defaultSort = "name";
Cloud.defaultColumns = "name, image";

Cloud.register();
