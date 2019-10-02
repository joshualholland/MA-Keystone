var keystone = require('keystone');
var Types = keystone.Field.Types;
var path = require('path');

// Creates list for team
var Team = new keystone.List('Team');

// Storage for small images
var smallImgStorage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        // required; path where the files should be stored
        path: keystone.expandPath('server/public/img/team/small'),
        generateFilename: function (file, index) {
            return file.originalname;
        },
        whenExists: 'error',
        // path where files will be served
        publicPath: '/public/img/team/small',
    },
});

// Storage for larger images
var largeImgStorage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        // required; path where the files should be stored
        path: keystone.expandPath('server/public/img/team/large'),
        generateFilename: function (file, index) {
            return file.originalname;
        },
        whenExists: 'error',
        // path where files will be served
        publicPath: '/public/img/team/large',
    },
});

// Creates fields for team
// May be necessary to update these for pre and post popup about
Team.add({
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

Team.defaultColumns = 'name, start_date, about, image';
Team.register();