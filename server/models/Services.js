var keystone = require('keystone');
var Types = keystone.Field.Types;

// First we gonna create our User list
var Services = new keystone.List('Services');

// Then we gonna add the fields 
Services.add({
  text: { type: Types.Text, index: true }
});

Services.defaultColumns = 'name';

Services.register();