'use strict';

/**
 * Returns an approximate centroid for a concave polygon
 * @param  {array}      array of points of the polygon
 * @return {point}      The centroid
 */
module.exports = function(points) {
  var l = points.length;

  return points.reduce(function(center, p, i) {
    center.x += p.x;
    center.y += p.y;

    if(i === l - 1) {
        center.x /= l;
        center.y /= l;
    }

    return center;
  }, {x: 0, y: 0});
};