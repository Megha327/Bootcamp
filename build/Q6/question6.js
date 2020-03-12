'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uniqueLog = undefined;

var _filter = require('./filter.js');

var uniqueLog = exports.uniqueLog = function uniqueLog() {
    console.log('Question6: ' + (0, _filter.getUnique)([1, 2, 3, 4, 5, 1, 2, 3, 4]));
};