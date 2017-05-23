//A practice in memoization. This was a problem I received during an interview.

//Remember that Function.prototype.apply() accepts two arguments, the first being
//a context to use as "this." Notice that null may be passed. The second argument
//is an array-like object that contains all necessary arguments for the function
//that #apply is being called upon.

//Compared to #apply, Function.prototype.call() is very similar. #call accepts one or more
//arguments. The first being a value provided as context (this). The rest being a list
//of arguments to provide to the "called" function (vs #apply which accepts an array).
//This is important to note because you can use spread syntax with #call.

function timesTwo(num) {
  return num * 2;
}

function memoize(func) {
  var cache = {};

  return function(arg) {

    if (cache[arg]) {
      return cache[arg];
    }

    var output = func.apply(null, arg);
    cache[arg] = output;
    return output;
  }

}
