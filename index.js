/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-issue-app-import-addon',
  included(app) {
    app.import('vendor/styles/background-black.css');
  },
};
