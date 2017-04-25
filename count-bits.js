'use strict';

//this function accepts a number and will first convert it to binary.
//it will then count and return the number of 1's in the binaryArr.
//for example: 20 in binary is 10100. This function would return 2;

function countBits(n) {
  var counter = n;
  var binaryArr = [];
  var result = 0;

  while(counter > 0) {
    if(counter % 2 === 1) binaryArr.unshift(1);
    if(counter % 2 === 0) binaryArr.unshift(0);
    counter = Math.floor(counter / 2);
  }

  for(var i = 0; i < binaryArr.length; i++) {
    result += binaryArr[i];
  }

  return result;
}
