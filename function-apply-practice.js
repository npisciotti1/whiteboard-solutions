//A practice in memoization. This was a problem I received during an interview.

//Remember that Function.prototype.apply() accepts two arguments, the first being
//a context to use as "this." Notice that null may be passed. The second argument
//is an array-like object that contains all necessary arguments for the function
//that #apply is being called upon.

//Compared to #apply, Function.prototype.call() is very similar. #call accepts one or more
//arguments. The first being a value provided as context (this). The rest being a list
//of arguments to provide to the "called" function (vs #apply which accepts an array).
//This is important to note because you can use spread syntax with #call.


//First declare a function you wish to memoize. It's important to note that the reason
//for creating memoization is that it prevents unnecessary computation.

function timesTwo(num) {
  //pretend this is expensive to compute
  return num * 2;
}

//Now I declare my memoize function which uses an object to use as our "cache." Notice
//that #memoize accepts a function. Inside #memoize is another returned function with
//"args" declared. Notice also how "args" will represent our "num" argument in #timesTwo.
//We can do this because of JS's scopes and closures.

function memoize(func) {
  var cache = {};

  return function(args) {

    if (cache[args]) {
      return cache[args];
    }

    var output = func.apply(null, args);
    cache[args] = output;
    return output;
  }
}

//Here is a similar implementation but using Function.prototype.call()


function fibonacci(n) {
  if (n === 0 || n === 1)
    return n;
  else
    return fibonacci(n - 1) + fibonacci(n - 2);
}
