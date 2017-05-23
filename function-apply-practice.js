//A practice in memoization. This was a problem I received during an interview.

function timesTwo(num) {
  return num * 2;
}

function memoize(func) {
  var cache = {};

  return function(arg) {

    if (cache[arg]) {
      return cache[arg];
    }

    var output = func.apply(null, num);
    cache[num] = output;
    return output;
  }

}
