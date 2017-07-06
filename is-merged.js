/*
Write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 are in the same order as in s.


'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears
*/

const strHead = str => str.substr(0, 1);
const strTail = str => str.substr(1);
const isEmpty = str => str === '';
const compareFirstChars = (x, y) => strHead(x) === strHead(y);

function isMerge(s, p1, p2) {
	if (isEmpty(s)) return isEmpty(p1) && isEmpty(p2);
  else if (compareFirstChars(s, p1) && compareFirstChars(s, p2)) {
    return (
      isMerge(strTail(s), strTail(p1), p2) ||
      isMerge(strTail(s), p1, strTail(p2))
    );
  } else if (compareFirstChars(s, p1)) {
    return isMerge(strTail(s), strTail(p1), p2);
  } else if (compareFirstChars(s, p2)) {
    return isMerge(strTail(s), p1, strTail(p2))
  } else return false
}
