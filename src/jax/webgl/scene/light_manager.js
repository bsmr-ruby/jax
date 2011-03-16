//= require "light_source"

Jax.Scene.LightManager = (function() {
  return Jax.Class.create({
    initialize: function() {
      this._lights = [];
    },
    
    add: function(light) {
      if (this._lights.length == Jax.max_lights)
        throw new Error("Maximum number of light sources in a scene has been exceeded! Try removing some first.");
      this._lights.push(light);
    },
    
    isEnabled: function() {
      if (typeof(this.enabled) != "undefined") return this.enabled;
      if (arguments.length == 1) {
        if (this._lights.length > arguments[0]) return this._lights[arguments[0]].isEnabled();
        return false;
      }
      return this._lights.length > 0;
    },
    
    getLight: function(index) { return this._lights[index]; },
    
    getDiffuseColor: function(lightIndex) { return this._lights[lightIndex] ? this._lights[lightIndex].getDiffuseColor() : [1,1,1,1]; },
    
    getSpecularColor: function(lightIndex) { return this._lights[lightIndex] ? this._lights[lightIndex].getSpecularColor() : [1,1,1,1]; },
    
    getAmbientColor: function(lightIndex) { return this._lights[lightIndex] ? this._lights[lightIndex].getAmbientColor() : [1,1,1,1]; },
    
    getPosition: function(lightIndex) { return this._lights[lightIndex] ? this._lights[lightIndex].getPosition() : [0,0,0]; },
    
    getConstantAttenuation: function(lightIndex) { return this._lights[lightIndex] ? this._lights[lightIndex].getConstantAttenuation() : 0; },
    
    getLinearAttenuation: function(lightIndex) { return this._lights[lightIndex] ? this._lights[lightIndex].getLinearAttenuation() : 0; },
                                                                                                                                  
    getQuadraticAttenuation: function(lightIndex) { return this._lights[lightIndex] ? this._lights[lightIndex].getQuadraticAttenuation() : 0; }
  });
})();
