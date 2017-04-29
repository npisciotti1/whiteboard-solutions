//this function will accept two arrays and remove any occurences of values found in the second array from the first.

//currently running at an O(n) by combining both arrays and looping once.

function arrayDiff(a, b) {
  var combined = a.concat(b);

  var result = combined.filter( function(val) {
    if(b.indexOf(val) === -1) return val;
  });

  return result;
}
