//Currying and partial application are two ways of transforming a function into another //function with a generally smaller arity. While they are often confused with each other, //they work differently. The goal is to learn to differentiate them.

/*Currying:

Take a simple add function and create a curried version of it:

function add(a, b, c) {
  return a + b + c
}
add(3, 4, 5);
--> 12

Here's our curried version:

function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c
    }
  }
}
curriedAdd(3)(4)(5)
--> 12

*/
function curryPartial(fn) {
}
