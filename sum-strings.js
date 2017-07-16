//Given the string representations of two integers, return the string representation
//of the sum of those integers.

//For example:

// sumStrings('1','2') // => '3'

function sumStrings(a,b) {
  let result = 0;
  for(var i = 0; i < arguments.length; i++) {
    result += parseInt(arguments[i], 10);
  }
  return result.toString();
}
