const keystone = require('keystone');
const keyRing = require('./keys.js/index.js');
// Get env from .env
require('dotenv').config();

// Next app
const next = require('next');
let app;
const dev = process.env.NODE_ENV === 'development';
const prod = process.env.NODE_ENV === 'production';
// This env variable is set by heroku automatically. Also 
// If you don't set mongo in keystone.init it just makes one automatically so...
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/MA_Salon';

if(dev) app = next({ dev });
if(prod) app = next({ prod });

// Set up our keystone instance
keystone.init({
  // The name of the KeystoneJS application
  'name': 'morgan-ashley',
  'static':['public'],
  'auto update': true,
  // The url for your MongoDB connection
  // 'mongo': url,
  // Whether to enable built-in authentication for Keystone's Admin UI,
  'auth': true,
  // Cloudinary Config
  'cloudinary config': 'cloudinary://219567243374754:iT4tkXVpJeXujq_-n1HX0SbTDBI@db4axno6t',
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

