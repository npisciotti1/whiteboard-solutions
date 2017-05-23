//This function accepts two strings and will test to see if the combination of letters in string1 can be used to create string2. No whitespace or punctuation will be used in testing

//str1 = 'tacks';
//str2 = 'cats';
//should return true;

function scramblies(str1, str2) {
  var split1 = str1.split(' ').join('').split('');
  var arrObj = {};

  for(var i = 0; i < split1.length; i++) {
    arrObj[i] = split1[i];
  }

  while(split1.length) {
    if(arrObj[split1[0]]) split1.shift();
    return false;
  }
  return true;
}
