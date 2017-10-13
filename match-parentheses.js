'use strict';

//Given a string, we want to decide if any 'open braces' have a corresponding closing
//brace. Sample I/O:

// '([{}])' should return true
// '{}()[]' should return true
// '([)]' should return false

//We can use a stack to manage our comparisons.

let data = '{}()'

const matchParens = (data) => {
  let stack = [];
  let braces = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
  }

  let closingBraces = ')}]'

  for(var i = 0; i < data.length; i++) {
    let char = data[i];
    if(braces[char]) {
      stack.push(char);
    } else if (closingBraces.includes(char)) {
      let top = stack.pop();
      if(!braces[top] === char) return false;
    }
  }

  return true;
}
