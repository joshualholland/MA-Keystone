var keystone = require("keystone");
var Types = keystone.Field.Types;

// Creates list for stylists
var Stylist = new keystone.List("Stylist");

// Storage for small images
// var smallImgStorage = new keystone.Storage({
//     adapter: keystone.Storage.Adapters.FS,
//     fs: {
//         // required; path where the files should be stored
//         path: keystone.expandPath('./public/stylists'),
//         generateFilename: function (file, index) {
//             return file.originalname;
//         },
//         whenExists: 'overwrite',
//         // path where files will be served
//         publicPath: './public/stylists',
//     },
// });

// Storage for larger images
// var largeImgStorage = new keystone.Storage({
//     adapter: keystone.Storage.Adapters.FS,
//     fs: {
//         // required; path where the files should be stored
//         path: keystone.expandPath('./public/stylists'),
//         generateFilename: function (file, index) {
//             return file.originalname;
//         },
//         whenExists: 'overwrite',
//         // path where files will be served
//         publicPath: './public/stylists',
//     },
// });

// Creates fields for stylists
// May be necessary to update these for pre and post popup about
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
    }
  }
});

Stylist.defaultColumns = "name, start_date, about, small_image";
Stylist.register();
