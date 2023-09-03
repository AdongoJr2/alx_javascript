#!/usr/bin/node
class Rectangle {
  constructor (w = 0, h = 0) {
    if (w <= 0) return;
    if (h <= 0) return;

    this.width = w;
    this.height = h;
  }

  print () {
    const widthArr = [];

    for (let i = 0; i < this.width; i++) {
      widthArr.push('X');
    }

    for (let i = 0; i < this.height; i++) {
      console.log(widthArr.join(''));
    }
  }
}

module.exports = Rectangle;
