const keystone = require('keystone');
// Get env from .env
require('dotenv').config();

// Next app
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

// Set up our keystone instance
keystone.init({
  // The name of the KeystoneJS application
  'name': 'morgan-ashley',
  'static':['public'],
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

app.prepare()
  .then(() => {
    keystone.set('routes', require('./routes')(app));

    keystone.start();
});

