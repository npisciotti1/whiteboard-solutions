// This function accepts 3 arguments, the first being a vertically and horizontally
// sorted matrix. The second argument (n) being the number of rows, the third (m)
// being the number of items in each row.

// Given:


var matrix = [
  [-10, -9, -7, -5],
  [-5,  -4, -3, -2],
  [-2,  -1,  0,  1]
];

var n = matrix.length;
var m = matrix[0].length;


function countNegativeInts(matrix, n, m) {
  var count = 0;
  var i = 0;
  var j = m - 1;

  while(i < n && j >= 0) {
    if(matrix[i][j] < 0) {
      count += (j + 1);
      i++;
      continue;
    }
    j--
  }
  return count;
}
