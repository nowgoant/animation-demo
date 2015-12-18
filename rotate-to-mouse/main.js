/**
 * Created by nowgoant on 2015/12/18.
 */

//var utils = require('../../dist/js/utils');
//var Arrow = require('./arrow');

window.onload = function () {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        mouse = utils.captureMouse(canvas),
        arrow = new Arrow();

    arrow.x = canvas.width / 2;
    arrow.y = canvas.height / 2;

    (function drawFrame () {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);

        var dx = mouse.x - arrow.x,
            dy = mouse.y - arrow.y;

        arrow.rotation = Math.atan2(dy, dx); //radians
        arrow.draw(context);
    }());
};