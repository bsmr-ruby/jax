void main() {
  // ambient was applied by the basic shader; applying it again will simply brighten some fragments
  // beyond their proper ambient value. So, we really need to apply the bump shader ONLY to diffuse+specular.

  if (PASS_TYPE != <%=Jax.Scene.AMBIENT_PASS%>) {
    vec4 ambient = import(AMBIENT, vec4(1)),
         diffuse = import(DIFFUSE, vec4(1)),
         specular = import(SPECULAR, vec4(1));

    vec3 nLightDir = normalize(vLightDir);
    vec3 nEyeDir = normalize(vEyeDir);
    vec4 color = texture2D(NormalMap, vTexCoords);
    vec3 map = //nMatrix * 
               normalize(color.xyz * 2.0 - 1.0);
             
    float litColor = max(dot(map, nLightDir), 0.0) * vAttenuation;

    // specular
    vec3 reflectDir = reflect(nLightDir, map);
    float spec = max(dot(nEyeDir, reflectDir), 0.0);
    spec = pow(spec, materialShininess);

    // Treat alpha in the normal map as a specular map; if it's unused it will be 1 and this
    // won't matter.
    spec *= color.a;
  
    diffuse *= litColor;
    specular *= spec;

    gl_FragColor = ambient + diffuse + specular;

    export(vec4, AMBIENT, ambient);
    export(vec4, DIFFUSE, diffuse);
    export(vec4, SPECULAR, specular);
  }
}
