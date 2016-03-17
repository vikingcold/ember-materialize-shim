/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function() {},
  beforeInstall: function(options) {
    return this.addBowerPackageToProject('materialize', 'mike-north/materialize#bower-fix');
  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    return this.addPackageToProject('ember-cli-sass', '^5.3.0').then(function() {
      return this.addAddonToProject('ember-material-design-icons-shim', '~0.0.1');
    }.bind(this));
  }
};
