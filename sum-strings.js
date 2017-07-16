//Given the string representations of two integers, return the string representation
//of the sum of those integers.

//For example:

// sumStrings('1','2') // => '3'

function sumStrings(a,b) {
  let result = 0;
  for(var i = 0; i < arguments.length; i++) {
    result += Number(arguments[i]);
  }
  return result.toString();
}

function sumStrings(a, b) {
  a += '' , b += '';
  var res = [], carry = 0, lena = a.length, lenb = b.length;
  if(lena > lenb) {
    b = new Array(lena - lenb + 1).join('0') + b;
  } else {
    a = new Array(lenb - lena + 1).join('0') + a;
  }
  for(var i=Math.max(lena, lenb)-1; i>=0; i--) {
    var add = +(a.charAt(i)) + +(b.charAt(i)) + carry;
    res.push(add%10);
    carry = (add - (add%10)) / 10;
  }
  if(carry) res.push(carry);
  return res.reverse().join('');
}
