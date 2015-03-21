'use strict';

var test = require('tape');
var centroid = require('../index.js');

test('Square', function(assert) {
    var center = centroid([{x: 0, y: 0}, {x: 50, y: 0}, {x: 50, y: 50}, {x: 0, y: 50}]);
    assert.equal(center.x, 25);
    assert.equal(center.y, 25);
    assert.end();
});

test('Triangle', function(assert) {
    var center = centroid([{x: 0, y: 0}, {x: 100, y: 0}, {x: 50, y: 99}]);
    assert.equal(center.x, 50);
    assert.equal(center.y, 33);
    assert.end();
});