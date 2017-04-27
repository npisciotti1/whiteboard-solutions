//this function accepts a string, split it on each letter and output it in a format that looks as follows --> 'A-Bb-Ccc-Aaaa-Fffff-Dddddd' etc.

function accum(s) {
  var result = '';
  var splitStr = s.split('');

  for(var i = 0; i < splitStr.length; i++) {
    var counter = i;
    var cap = splitStr[i].toUpperCase();
    var low = splitStr[i].toLowerCase();
    result += cap;
    if(i > 0) {
      while(counter > 0) {
        result += low;
        counter--;
      }
    }
    if(i !== (splitStr.length - 1)) result += '-';
  }
  return result;
}

//better implementation

function accum(str) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}
