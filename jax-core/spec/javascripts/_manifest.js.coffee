###
Loads the various Jax components but not the files in this directory.
This was split from `jax.js.coffee` so that it can be reused by the
project docs without the development cruft.


This file pulls in your Jax application and any files (such as
Jax itself) that it depends upon. You can tweak this file as
needed. By default, the entire Jax framework gets included.

Pull in `Jax.Context`, which is the fundamental interface
for using Jax.
#= require "jax/context"

#= require "jax/texture"

Load renderers. Jax will try to use renderers in the order they
appear here.
#= require "jax/renderers/webgl"
#= require "jax/renderers/headless"

Support for input devices. Don't bother loading this
if your scene does not process input from the user,
or if you're handling that yourself.
#= require "jax/input"

Support for Perlin noise within fragment and vertex shaders
#= require "jax/noise"

Support for Jax shaders and materials.
Without these, you'll need to manually pass a `material`
object into the render sequence.
#= require "jax/shader"
#= require "jax/material"

The default Jax scene manager. Without it, you'll need
to manage the scene directly.
#= require "jax/world"

Light and shadow constructs. Without these, you'll be unable
to make use of the default diffuse, specular and shadow map
shaders.
#= require "jax/light"
#= require "jax/shadow_map"

Pull in all shaders and resources.
#= require 'shaders/core'
#= require 'resources/core'

Support for built-in models and meshes.
#= require "jax/builtin/all"

Deprecation warnings. These should come _last_ in the load
order. If your application is **not** giving you any deprecation
warnings in development mode, it's safe to remove the notices
from a production application.
#= require 'jax/deprecation'

###

