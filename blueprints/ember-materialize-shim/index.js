/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function() {},
  beforeInstall: function(options) {
    return this.addBowerPackageToProject('materialize', '0.97.6');
  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    return this.addPackageToProject('ember-cli-sass', 'mike-north/ember-cli-sass#8ceb57d41f5774e8ececb5d1f05454449c19000c').then(function() {
      return this.addAddonToProject('ember-material-design-icons-shim', '~0.1.2');
    }.bind(this));
  }
};
