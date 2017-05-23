//This function accepts two strings and will test to see if the combination of letters in string1 can be used to create string2. No whitespace or punctuation will be used in testing

//str1 = 'tacks';
//str2 = 'cats';
//should return true;


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





//less-effective solution using a cache and arrays as properties - does handle whitespace though.
function scramble(str1, str2) {
  var split1 = str1.split(' ').join('').split('');
  var split2 = str2.split(' ').join('').split('');
  var cache = {};

  for(var i = 0; i < split1.length; i++) {
    if(cache[split1[i]]) cache[split1[i]].push(split1[i]);
    else {
       cache[split1[i]] = [];
       cache[split1[i]].push(split1[i]);
     };
  }

  while(split2.length) {
    if(cache[split2[0]]) {
      cache[split2[0]].shift();
      split2.shift();
    } else return false;
  }
  return true;
}
