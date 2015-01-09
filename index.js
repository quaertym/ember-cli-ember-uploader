/* jshint node: true */
'use strict';

module.exports = {
  name: 'Ember CLI Ember Uploader',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/ember-uploader/dist/ember-uploader.named-amd.js', {
      exports: {
        'ember-uploader/file-field': ['default'],
        'ember-uploader/s3': ['default'],
        'ember-uploader/uploader': ['default']
      }
    });
  }
};
