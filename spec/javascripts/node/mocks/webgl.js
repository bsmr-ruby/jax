// it's a function so that we can initialize a new context for each spec
// that way specs don't taint each other
exports.context = (function() { return {
  fake: true,
  
  getParameter: function() { return 32; },
  clearColor: function() { },
  getError: function() { return this.NO_ERROR; },
  clearDepth: function() { },
  enable: function() { },
  disable: function() { },
  depthFunc: function() { },
  blendFunc: function() { },
  viewport: function() { },
  cullFace: function() { },
  polygonOffset: function() { },
  createFramebuffer: function() { return {}; },
  bindFramebuffer: function() { },
  createRenderbuffer: function() { return {}; },
  bindRenderbuffer: function() { },
  renderbufferStorage: function() { },
  createProgram: function() { return {}; },
  createShader: function() { return {}; },
  attachShader: function() { },
  shaderSource: function() { },
  compileShader: function() { },
  getShaderParameter: function() { return {}; },
  getShaderInfoLog: function() { return ""; },
  linkProgram: function() { },
  getProgramParameter: function() { return {}; },
  useProgram: function() { },
  drawArrays: function() { },
  framebufferRenderbuffer: function() { },
  createTexture: function() { return {}; },
  bindTexture: function() { },
  texImage2D: function() { },
  texParameteri: function() { },
  pixelStorei: function() { },
  framebufferTexture2D: function() { },
  checkFramebufferStatus: function() { return this.FRAMEBUFFER_COMPLETE; },
  clear: function() { },
  createBuffer: function() { return {}; },
  bindBuffer: function() { },
  bufferData: function() { },
  drawElements: function() { },
  readPixels: function() { return []; },
  activeTexture: function() { },
  bindTexture: function() { },
  getProgramInfoLog: function() { return ""; },
  getActiveUniform: function() { return {length:1,size:1,type:1,name:"unif"}; },
  getUniformLocation: function() { return {}; },
  
  TRIANGLES: 1,
  TRIANGLE_STRIP: 2,
  POINTS: 3,
  TRIANGLE_FAN: 4,
  LINEAR: 5,
  CLAMP_TO_EDGE: 12,
  NEAREST: 7,
  DONT_CARE: 8,
  RGBA: 9,
  TEXTURE_2D: 10,
  UNSIGNED_BYTE: 11,
  REPEAT: 6,
  BLEND: 13,
  SRC_ALPHA: 14,
  ONE_MINUS_SRC_ALPHA: 15,
  NO_ERROR: 16,
  DEPTH_TEST: 17,
  LEQUAL: 18,
  ARRAY_BUFFER: 19,
  STATIC_DRAW: 20,
  CULL_FACE: 21,
  FRONT: 22,
  BACK: 23,
  POLYGON_OFFSET_FILL: 24,
  FRAMEBUFFER: 25,
  RENDERBUFFER: 26,
  DEPTH_COMPONENT16: 27,
  VERTEX_SHADER: 28,
  FRAGMENT_SHADER: 29,
  COMPILE_STATUS: 30,
  LINK_STATUS: 31,
  ACTIVE_ATTRIBUTES: 32,
  ACTIVE_UNIFORMS: 33,
  DEPTH_ATTACHMENT: 34,
  COLOR_ATTACHMENT0: 35,
  ALPHA: 36,
  LUMINANCE: 37,
  MAX_VARYING_VECTORS: 38,
  MAX_UNIFORM_VECTORS: 39,
  MAX_VERTEX_UNIFORM_VECTORS: 40,
  MAX_FRAGMENT_UNIFORM_VECTORS: 41,
  MAX_VERTEX_ATTRIBS: 42,
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: 43,
  RGB: 44,
  TEXTURE_MAG_FILTER: 45,
  TEXTURE_MIN_FILTER: 46,
  TEXTURE_WRAP_S: 47,
  TEXTURE_WRAP_T: 48,
  UNPACK_FLIP_Y_WEBGL: 49,
  ELEMENT_ARRAY_BUFFER: 50,
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: 51,
  UNPACK_COLORSPACE_CONVERSION_WEBGL: 52,
  BROWSER_DEFAULT_WEBGL: 53,
  FRAMEBUFFER_COMPLETE: 54,
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 55,
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 56,
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 57,
  FRAMEBUFFER_UNSUPPORTED: 58,
  COLOR_BUFFER_BIT: 59,
  DEPTH_BUFFER_BIT: 60,
  ONE: 61,
  STREAM_DRAW: 62,
  UNSIGNED_SHORT: 63,
  LUMINANCE_ALPHA: 64,
  DEPTH_STENCIL: 65,
  DEPTH_STENCIL_ATTACHMENT: 66,
  TEXTURE0: 67,
  TEXTURE1: 68,
  TEXTURE2: 69,
  TEXTURE3: 70,
  TEXTURE4: 71,
  TEXTURE5: 72,
  TEXTURE6: 73,
  TEXTURE7: 74,
  TEXTURE8: 75,
  TEXTURE9: 76,
  TEXTURE10: 77,
  TEXTURE11: 78,
  TEXTURE12: 79,
  TEXTURE13: 80,
  TEXTURE14: 81,
  TEXTURE15: 82,
  TEXTURE16: 83,
  TEXTURE17: 84,
  TEXTURE18: 85,
  TEXTURE19: 86,
  TEXTURE20: 87,
  TEXTURE21: 88,
  TEXTURE22: 89,
  TEXTURE23: 90,
  TEXTURE24: 91,
  TEXTURE25: 92,
  TEXTURE26: 93,
  TEXTURE27: 94,
  TEXTURE28: 95,
  TEXTURE29: 96,
  TEXTURE30: 97,
  TEXTURE31: 98,
  TEXTURE_CUBE_MAP: 99,
  TEXTURE_CUBE_MAP_POSITIVE_X: 100,
  TEXTURE_CUBE_MAP_POSITIVE_Y: 101,
  TEXTURE_CUBE_MAP_POSITIVE_Z: 102,
  TEXTURE_CUBE_MAP_NEGATIVE_X: 103,
  TEXTURE_CUBE_MAP_NEGATIVE_Y: 104,
  TEXTURE_CUBE_MAP_NEGATIVE_Z: 105,
}; });
