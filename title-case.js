//This function accepts a two strings as arguments. The first will be the outputted/modified string. The second is a string containing words that will be ignored.

//Input looks like: titleCase('this is my test string', 'my is')
//Output will be: 'This is my Test String'

function titleCase(title, minorWords) {
 var minWordsArr = [];
 var titleArr = [];

 if(minorWords) {
   minWordsArr = minorWords.toLowerCase().split(' ');
 }

 titleArr = title.toLowerCase().split(' ');

 for(var i = 0; i < titleArr.length; i++) {
   if(minWordsArr.indexOf(titleArr[i]) === -1 || i === 0) {
     titleArr[i] = makeTitleCase(titleArr[i]);
   }
 }

 function makeTitleCase(word) {
   var splitStr = word.split('');
   splitStr[0] = splitStr[0].toUpperCase();
   return splitStr.join('');
 }
 return titleArr.join(' ');
}
