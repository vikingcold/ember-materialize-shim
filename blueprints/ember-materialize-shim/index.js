/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function() {},
  beforeInstall: function(options) {
    return this.addBowerPackageToProject('materialize', '^0.97.0');
  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    return this.addAddonToProject('ember-material-design-icons-shim', '~0.0.1');
    // Perform extra work here.
  }
};
