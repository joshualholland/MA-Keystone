var keystone = require('keystone');
var Types = keystone.Field.Types;

// First we gonna create our User list
var User = new keystone.List('User');

// Then we gonna add the fields 
User.add({
  name: { type: Types.Name, required: true, index: true },
  email: { type: Types.Email, initial: true, required: true, index: true },
  password: { type: Types.Password, initial: true },
});

User.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

User.defaultColumns = 'name, email, password';

User.register();