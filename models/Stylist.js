var keystone = require('keystone');
var Types = keystone.Field.Types;

// Creates list for stylists
var Stylist = new keystone.List('Stylist');

// Storage for small images
var smallImgStorage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        // required; path where the files should be stored
        path: keystone.expandPath('../../public/img/stylists/small'),
        generateFilename: function (file, index) {
            return file.originalname;
        },
        whenExists: 'error',
        // path where files will be served
        publicPath: '../../public/img/stylists/small',
    },
});

// Storage for larger images
var largeImgStorage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        // required; path where the files should be stored
        path: keystone.expandPath('../../public/img/stylists/large'),
        generateFilename: function (file, index) {
            return file.originalname;
        },
        whenExists: 'error',
        // path where files will be served
        publicPath: '../../public/img/stylists/large',
    },
});

// Creates fields for stylists
// May be necessary to update these for pre and post popup about
Stylist.add({
    name: { type: Types.Name, required: true, index: true },
    start_date: { type: Types.Text, index: true },
    about: { type: Types.Text, index: true },
    small_image: {
        type: Types.File,
        storage: smallImgStorage,
        mimetype: '.jpeg, .jpg, .gif, .svg',
    },
    large_image: {
        type: Types.File,
        storage: largeImgStorage,
        mimetype: '.jpeg, .jpg, .gif, .svg',
    }
});

Stylist.defaultColumns = 'name, start_date, about, image';
Stylist.register();