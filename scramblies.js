//This function accepts two strings and will test to see if the combination of letters in string1 can be used to create string2. No whitespace or punctuation will be used in testing

//str1 = 'tacks';
//str2 = 'cats';
//should return true;

function scramble(str1, str2) {
  var split = str1.split(' ').join('').split('');
  var cache = {};

  for(var i = 0; i < split.length; i++) {
    if(cache[split[i]]) cache[split[i]] += split[i];
    else cache[split[i]] = split[i];
  }

  while(split.length) {
    if(cache[split[0]]) {
      var removed = split.shift();
      cache[split[0]] -= removed;
    } else return false;
  }
  return true;
}
