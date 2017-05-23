//This function accepts two strings and will test to see if the combination of letters in string1 can be used to create string2. No whitespace or punctuation will be used in testing

//str1 = 'tacks';
//str2 = 'cats';
//should return true;

//much quicker and non-mutative solution
function scramble(str1, str2) {
  var split1 = str1.split('').sort();
  var split2 = str2.split('').sort();
  var i = 0;

  for(var x = 0; i < split2.length && x <= split1.length; x++) {
    if(split2[i] === split1[x]) i++;
  }
  return(x <= split1.length);
}

//slower and less-effective solution which is mutative(expensive)
function scramble(str1, str2) {
  var split1 = str1.split('');
  var split2 = str2.split('');

  while(split2.length) {
    var letterIdx = split1.indexOf(split2[0]);
    if(letterIdx !== -1) {
      split2.shift();
      split1.splice(letterIdx, 1);
    } else return false;
  }
  return true;
}
