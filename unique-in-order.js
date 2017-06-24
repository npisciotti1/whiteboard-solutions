//this function accepts a string or array and will return a new array that has no duplicated items while still preserving the original order.

var noDuplicates = function(iterable){
  var result = [];

  if(typeof iterable === 'array') {
    for(var i = 0; i < iterable.length; i++) {
      if (result.indexOf(iterable[i]) === -1) result.push(iterable[i]);
    }
  }

  if(typeof iterable === 'string') {
    var splitStr = iterable.split('');
    for(var i = 0; i < splitStr.length; i++) {
      if (result.indexOf(splitStr[i]) === -1) result.push(splitStr[i]);
    }
  }
  return result;
}

//this function accepts a string or array and will return a new array that has no consecutive repeating items while still preserving the original order.

function uniqueInOrder(iterable) {
  var result = [];

  if(typeof iterable === 'string') {
    var splitStr = iterable.split('');
    for(var i = 0; i < splitStr.length; i++) {
      var next = i + 1;
      if(splitStr[i] !== splitStr[next]) {
        result.push(splitStr[i]);
      }
    }
    return result;
  } else {
    for(var i = 0; i < iterable.length; i++) {
      var next = i + 1;
      if(iterable[i] !== iterable[next]) {
        result.push(iterable[i]);
      }
    }
  }
  return result;
}
