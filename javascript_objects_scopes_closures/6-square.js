#!/usr/bin/node
const SquareBase = require('./5-square');

class Square extends SquareBase {
  charPrint (c = 'X') {
    const widthArr = [];

    for (let i = 0; i < this.width; i++) {
      widthArr.push(c);
    }

    for (let i = 0; i < this.height; i++) {
      console.log(widthArr.join(''));
    }
  }
}

module.exports = Square;
