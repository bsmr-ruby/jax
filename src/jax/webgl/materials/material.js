//= require "../shader"

/**
 * class Jax.Material
 * 
 * Represents a single material, which has its own color, lighting and texture properties.
 * 
 * Example:
 * 
 *     var material = new Jax.Material({ specular:    0,
 *                                       softness:    0.1,
 *                                       glossiness: 10,
 *                                       opacity:     1.0,
 *                                       shaderType: "phong",
 *                                       colors: {
 *                                         diffuse:  [0.8, 0.8, 0.8, 1.0],
 *                                         ambient:  [0.8, 0.8, 0.8, 1.0],
 *                                         specular: [1.0, 1.0, 1.0, 1.0],
 *                                         emissive: [0.0, 0.0, 0.0, 1.0]
 *                                       }
 *                                     });
 *     material.shaderType = "blinn";
 **/
Jax.Material = (function() {
  function updatePrevious(self) {
    self.previous = self.previous || {colors:{}};
    for (var i in self.colors)
      self.previous.colors[i] = self.colors[i];
    self.previous.specular    = self.specular;
    self.previous.glossiness  = self.glossiness;
    self.previous.softness    = self.softness;
    self.previous.shaderType  = self.shaderType;
    self.previous.opacity     = self.opacity;
    self.previous.light_count = self.light_count;
    self.previous.lights      = self.lights;
  }
  
  function compile(self, context) {
    self.shader = new Jax.Shader();
    self.shader.update(self);
    updatePrevious(self);
  }
  
  return Jax.Class.create({
    initialize: function(options) {
      options = options || {};
      options.colors = options.colors || {};
      
      this.colors = {
        diffuse:  options.colors.diffuse  || [0.8, 0.8, 0.8, 1.0],
        ambient:  options.colors.ambient  || [0.02, 0.02, 0.02, 1.0],
        specular: options.colors.specular || [1.0, 1.0, 1.0, 1.0],
        emissive: options.colors.emissive || [0.0, 0.0, 0.0, 1.0]
      };
      
      this.specular   = typeof(options.specular)   == "undefined" ?    0    : options.specular;
      this.softness   = typeof(options.softness)   == "undefined" ?    0.1  : options.softness;
      this.glossiness = typeof(options.glossiness) == "undefined" ?   10    : options.glossiness;
      this.opacity    = typeof(options.opacity)    == "undefined" ?    1.0  : options.opacity;
      this.shaderType = typeof(options.shaderType) == "undefined" ? "phong" : options.shaderType;
    },

    /**
     * Jax.Material#render(context, mesh) -> undefined
     * Renders the specified object to the specified context, using this material.
     *
     * This action will build and compile the shader for the given context if necessary.
     **/
    render: function(context, mesh, options) {
      this.lights = context.world.lighting._lights;
      this.light_count = context.world.lighting._lights.length;
      
      if (this.isChanged())
        compile(this, context);

      this.shader.render(context, mesh, options);
    },

    /**
     * Jax.Material#isChanged() -> Boolean
     * Returns true if this material's properties have been changed since
     * the last time its internal shader was compiled.
     **/
    isChanged: function() {
      if (!this.previous) return true;
      var i;
      for (i = 0; i < 3; i++) {
        if (this.colors.diffuse[i]  != this.previous.colors.diffuse[i])  return true;
        if (this.colors.ambient[i]  != this.previous.colors.ambient[i])  return true;
        if (this.colors.specular[i] != this.previous.colors.specular[i]) return true;
        if (this.colors.emissive[i] != this.previous.colors.emissive[i]) return true;
      }
      
      if (this.specular   != this.previous.specular)   return true;
      if (this.softness   != this.previous.softness)   return true;
      if (this.glossiness != this.previous.glossiness) return true;
      if (this.shaderType != this.previous.shaderType) return true;
      if (this.opacity    != this.previous.opacity)    return true;
      if (this.lights && this.lights.length != this.previous.light_count) return true;
      if (!this.lights && this.previous.light_count)   return true;
      
      return false;
    }
  });
})();

Jax.Material.instances = {};

/**
 * Jax.Material.find(name) -> Jax.Material
 * - name (String): the unique name of the material you're looking for
 * 
 * Returns the instance of Jax.Material matching the specified name, or throws
 * an error if the material can't be found.
 **/
Jax.Material.find = function(name) {
  var result;
  if (result = Jax.Material.instances[name])
    return result;
  if (Jax.shader_program_builders[name])
    return Jax.Material.create(name, {shaderType:name});
  throw new Error("Material not found: '"+name+"'!");
};

/**
 * Jax.Material.create(name, options) -> Jax.Material
 * - name (String): the unique name of this material
 * - options (Object): a set of options to be passed to the material constructor
 * 
 * Creates a material and adds it to the material registry. This way,
 * the material can be later retrieved using:
 * 
 *     var matr = Jax.Material.find(name);
 *     
 * Note that unlike instances of Jax.Model, specifying a name for a material that
 * already exists will not raise an error. Instead, the previous material will be
 * replaced with a new material constructed using the new options. This allows you
 * to override Jax defaults like so:
 * 
 *     Jax.Material.create("default", {...});
 *     
 **/
Jax.Material.create = function(name, options) {
  return Jax.Material.instances[name] = new Jax.Material(options);
};

Jax.Material.create('failsafe', {shaderType: 'failsafe'});
Jax.Material.create('default' , {shaderType: 'phong'});
