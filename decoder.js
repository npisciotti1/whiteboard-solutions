/* This function accepts a string and returns it according to the following rules:
- Each character will be changed to the next character in the alphabet.
- All vowels are preserved (except y)
- All special characters are preserved
- Uppercasing is preserved.
- The letter 'z || Z' will becoming either 'a || A'
*/

//Input: 'Akk ir Vekk!'
//Output: 'All is Well!'

function decoder(input) {
	let vowelCodes = [65, 69, 73, 79, 85, 97, 101, 105, 105, 111, 117];
	let midCharCodes = [91, 92, 93, 94, 95, 96];
	return input
		.split('')
		.map((curVal, idx, arr) => {
			let charVal = curVal.charCodeAt();
			if (midCharCodes.indexOf(charVal) > 0) return curVal;
			if (vowelCodes.indexOf(charVal) === -1 && charVal > 65 && charVal < 123) {
				if (curVal === 'z') return 'a';
				if (curVal === 'Z') return 'A';
				return String.fromCharCode(charVal + 1);
			}
			return curVal;
		})
		.join('');
}
