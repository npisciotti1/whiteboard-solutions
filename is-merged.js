/*
Write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 are in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears
*/

function isMerge(s, part1, part2) {
	var p1 = 0;
	var p2 = 0;

	for (var i = 0; i < s.length; i++) {
		if (s[i] === part1[p1]) {
			p1++;
			continue;
		} else if (s[i] === part2[p2]) {
			p2++;
			continue;
		}
		return false;
	}
	return true;
}
