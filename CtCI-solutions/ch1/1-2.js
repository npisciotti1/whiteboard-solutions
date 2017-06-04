//This function accepts two strings of equal length and checks to see if they are
//permutations of each other. I've left a separate solution that will check against
//strings that are different length


//this ver checks against strings of equal length
function checkPermutation(str1, str2) {
  if(str1.length === 0 || str1.length !== str2.length) return false;

  var map = new Map();

  for(var i = 0; i < str1.length; i++) {
    //this nifty bit of logic I got from the online solutions, basically increments
    //by 1 if map.get returns a found value, otherwise due to short-circuit evaluation with the '||'
    //operator, will set to 1.
    map.set(str1[i], map.get(str1[i] + 1 || 1))
  }

  for(var i = 0; i < str2.length; i++) {
    var count = map.get(str2[i]);
    if(!count) return false;
    if(count === 1) map.delete(str2[i]);
    else map.set(str2[i], count - 1);
  }

  return map.size === 0;
}
