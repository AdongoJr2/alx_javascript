#!/usr/bin/node
class Rectangle {
  constructor (w = 0, h = 0) {
    if (w <= 0) return;
    if (h <= 0) return;

    this.width = w;
    this.height = h;
  }
}

module.exports = Rectangle;
  