/* jshint node: true */
'use strict';

module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('ember-uploader', '0.3.2');
  }
};
