var keystone = require('keystone');
var Types = keystone.Field.Types;
var path = require('path');

// First we gonna create our User list
var Regular_Services = new keystone.List('Regular_Services');

// Then we gonna add the fields 
Regular_Services.add({
  text: { type: Types.Text, index: true },
  Price: { type: Types.Money, index: true },
});

Regular_Services.defaultColumns = 'name, price';

Regular_Services.register();