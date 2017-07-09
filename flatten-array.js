// This is a cool implementation I found on MDN using JS's native 'reduce'

let arr = [[1,2], [3,4], [4,5]];

let flattened = arr.reduce( (a,b) => a.concat(b));

// Handling nested arrays;

arr = [1,[2,[3]],[4]];

function flatten(arr) {
  if(!Array.isArray(arr)) return arr;

  let array = [];
  for(var i = 0; i < arr.length; i++) {
    array = array.concat(flatten(arr[i]));
  }
  return array;
}
