// This is a cool implementation I found on MDN using JS's native 'reduce'

let arr = [[1,2], [3,4], [4,5]];

let flattened = arr.reduce( (a,b) => a.concat(b));

// Another way of doing it
