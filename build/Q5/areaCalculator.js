"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PI = 3.14159;

var areaCircle = exports.areaCircle = function areaCircle(r) {
  return PI * r * r;
};
var areaRectangle = exports.areaRectangle = function areaRectangle(l, w) {
  return l * w;
};
var areaCylinder = exports.areaCylinder = function areaCylinder(r, l) {
  return 2 * PI * r * l;
};