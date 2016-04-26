/*jshint node:true*/
module.exports = {
  description: 'ember-materialize-shim installation blueprint',
  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addBowerPackageToProject('materialize', '0.97.6').then(function() {
      return this.addAddonsToProject({
        packages: [
          { name: 'ember-cli-sass', target: 'mike-north/ember-cli-sass#8ceb57d41f5774e8ececb5d1f05454449c19000c' },
          { name: 'ember-material-design-icons-shim', target: '~0.1.3' }
        ]
      });
    }.bind(this));
  }
};
