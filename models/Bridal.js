var keystone = require('keystone');
var Types = keystone.Field.Types;

var Bridal = new keystone.List("Bridal", {
  autokey: { path: "slug", from: "title", unique: true },
  map: { name: "title" }
});

Bridal.add({
  title: {type:String, required:true},
  state: {type: Types.Select, options: 'draft,published',default:'draft'},
  service: {type:String},
  price: {type:String}
});

Bridal.defaultColumns = "title, state|20%,service,price";

Bridal.register();