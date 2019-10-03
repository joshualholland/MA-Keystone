var keystone = require('keystone');
var Types = keystone.Field.Types;

// First we gonna create our User list
var Bridal = new keystone.List('Bridal');

// Then we gonna add the fields 
Bridal.add({
  text: { type: Types.Text, index: true },
  price: { type: Types.Money, index: true }
});

Bridal.defaultColumns = 'name';

Bridal.register();