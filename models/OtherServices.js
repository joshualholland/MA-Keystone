var keystone = require("keystone");
var Types = keystone.Field.Types;

var Other_Services = new keystone.List("Other_Services", {
    autokey: { path: "slug", from: "title", unique: true },
    map: { name: "title" }
});

Other_Services.add({
    title: { type: String, required: true },
    service: { type: String },
    price: { type: String }
});

Other_Services.defaultColumns = "title, state|20%,service,price";

Other_Services.register();
