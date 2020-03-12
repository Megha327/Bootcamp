'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.areaLog = undefined;

var _areaCalculator = require('./areaCalculator');

var areaLog = exports.areaLog = function areaLog() {
    console.log('Question5: Area of circle with radius 2: ' + (0, _areaCalculator.areaCircle)(2));
    console.log('Area of rectangle with l: 4, w: 3 ' + (0, _areaCalculator.areaRectangle)(4, 3));
    console.log('Area of cylinder with radius 2, height: 5: ' + (0, _areaCalculator.areaCylinder)(2, 5));
};