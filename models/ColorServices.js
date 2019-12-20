var keystone = require("keystone");
var Types = keystone.Field.Types;

var Color_Services = new keystone.List("Services", {
    autokey: { path: "slug", from: "title", unique: true },
    map: { name: "title" }
});

Color_Services.add({
    title: { type: String, required: true },
    service: { type: String },
    price: { type: String }
});

Color_Services.defaultColumns = "title, state|20%,service,price";

Color_Services.register();
