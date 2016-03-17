/* jshint node: true */
'use strict';

module.exports = {
  name: 'materialize',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Thin.woff2', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Thin.woff', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Thin.ttf', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Light.woff2', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Light.woff', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Light.ttf', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Regular.woff2', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Regular.woff', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Regular.ttf', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Medium.woff2', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Medium.woff', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Medium.ttf', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Bold.woff2', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Bold.woff', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Bold.ttf', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/materialize/dist/js/materialize.js');
  }
};
