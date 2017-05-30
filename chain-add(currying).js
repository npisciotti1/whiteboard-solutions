//We want to create a function that will add numbers together when called in succession.
//  add(1)(2)(3); // 6
//  add(1)(2)(3)(4); // 10
//  add(1)(2)(3)(4)(5); // 15

//A single call will just return the argument:
//  add(1); // 1


// We should be able to store the returned values and reuse them:
//  var addTwo = add(2);
//  addTwo; // 2
//  addTwo + 5; // 7
//  addTwo(3); // 5
//  addTwo(3)(5); // 10

function add(n) {
  var cache = 0;

  if(n) {
    cache += n;
    return function() {

    }
  }
}

//This is a function that accepts a functions and returns a "curried" version of it.
function curry(fx) {
  var arity = fx.length;

  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fx.apply(null, args);
    }
    else {
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0);
        return f1.apply(null, args.concat(args2));
      }
    }
  }
}
