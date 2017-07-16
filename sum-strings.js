//Given the string representations of two integers, return the string representation
//of the sum of those integers.

//For example:

// sumStrings('1','2') // => '3'


//first solution doesnt handle numbers bigger than Number.MAX_SAFE_INTEGER
function sumStrings(a,b) {
  let result = 0;
  for(var i = 0; i < arguments.length; i++) {
    result += Number(arguments[i]);
  }
  return result.toString();
}

//Second solution is working but doesn't handle the Kata properly for a test case.

function sumStrings2(a, b) {
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

//Nifty Helper function that deals with JS's Number.MAX_SAFE_INTEGER

function toFix(val){
  var str='';
  while (val > 0) {
    let num = val % 10;
    val = Math.trunc(val / 10);
    str = num + str;
  }
  return str;
}
