exports.init = function(gl) {

    gl.enable(gl.SCISSOR_TEST);

};

// Run every frame: use this to draw things to the screen.
exports.draw = function(gl) {

    var w = gl.drawingBufferWidth * 0.5;
    var h = gl.drawingBufferHeight * 0.5;

    // Top Left
    gl.scissor(0, h, w, h);
    gl.clearColor(1, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Top Right
    gl.scissor(w, h, w, h);
    gl.clearColor(0, 1, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Bottom Left
    gl.scissor(0, 0, w, h);
    gl.clearColor(0, 0, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Bottom Right
    gl.scissor(w, 0, w, h);
    gl.clearColor(1,1,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);

};
