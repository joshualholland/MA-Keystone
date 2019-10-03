//import keystone
var keystone = require('keystone');

// Set up our keystone instance
keystone.init({
  // The name of the KeystoneJS application
  'name': 'morgan-ashley',
  // Paths to our application static files
  'static': [ 'public' ],
  // Keystone includes an updates framework, 
  // which you can enable by setting the auto update option to true.
  // Updates provide an easy way to seed your database, 
  // transition data when your models change, 
  // or run transformation scripts against your database.
  'auto update': true,
  // The url for your MongoDB connection
  'mongo': 'mongodb://localhost:27017/MA_Salon',
  // Whether to enable built-in authentication for Keystone's Admin UI,
  'auth': true,
  // The key of the Keystone List for users, required if auth is set to true
  'user model': 'User',
  // The encryption key to use for your cookies.
  'cookie secret': '32FHSD0973NMDO98J9966DJL36MASG',
});

// Load your project's Models
keystone.import('./models');

// Add routes  
keystone.set('routes', require('./routes'));

// Start Keystone
keystone.start();