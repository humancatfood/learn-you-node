//This is a helper function to make it easier to get started.
//You should call this function once your shader is set up
var drawTriangle = require('./draw-triangle');
var fs = require('fs');

//Load the fragment/vertex shader sources
var FRAG_SRC = fs.readFileSync(__dirname + '/shader.frag', 'utf8');
var VERT_SRC = fs.readFileSync(__dirname + '/shader.vert', 'utf8');

//TODO: Create this shader in init
var shader;

// Run once at the beginning: use this to create
// and setup things to be used in your draw function.
exports.init = function(gl) {
    'use strict';

    //TODO: Initialize the shader here
    var vertShader = gl.createShader(gl.VERTEX_SHADER);
    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertShader, VERT_SRC);
    gl.shaderSource(fragShader, FRAG_SRC);

    gl.compileShader(vertShader);
    gl.compileShader(fragShader);

    if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS))
    {
      console.error("Error compiling vert-shader:", gl.getShaderInfoLog(vertShader));
    }

    if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS))
    {
      console.error("Error compiling frag-shader:", gl.getShaderInfoLog(fragShader));
    }

    shader = gl.createProgram();
    gl.attachShader(shader, vertShader);
    gl.attachShader(shader, fragShader);
    gl.linkProgram(shader);

    if (!gl.getProgramParameter(shader, gl.LINK_STATUS))
    {
        console.error('Error linking program:', gl.getProgramInfoLog(shader));
    }

};

// Run every frame: use this to draw things to the screen.
exports.draw = function(gl) {
    'use strict';

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    //Clear drawing buffer
    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(shader);

    //Now draw the triangle
    drawTriangle(gl);
};
