var keystone = require("keystone");
var Types = keystone.Field.Types;

var Services = new keystone.List("Services", {
  autokey: { path: "slug", from: "title", unique: true },
  map: { name: "title" }
});

Services.add({
  title: {type:String, required:true},
  // state: {type: Types.Select, options: 'draft,published',default:'draft'},
  service: {type:String},
  price: {type:String}
});

Services.defaultColumns = "title, state|20%,service,price";

Services.register();
