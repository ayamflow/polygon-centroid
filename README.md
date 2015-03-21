polygon-centroid
===

Return the centroid for a given convex polygon.

## Installation

`npm i polygon-centroid --save`

## Usage

`centroid(points)`
Return the point {x, y} which is the centroid of the given set of points (convex polygon).

## Example
```js
var centroid = require('polygon-centroid');
var center = centroid(this.polygon.points);
this.polygon.anchor.set(center.x, center.y);
this.polygon.rotation = Math.PI * 0.5;
```