/**
 * Created by nowgoant on 2015/12/23.
 */

'use strict';
require('./styles/main.css');

var MyModule =require('./modules/MyModule.js');
var component = require('./component.js');

MyModule();

document.body.appendChild(component());