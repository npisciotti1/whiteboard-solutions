//This function accepts a binary string and returns it's decimal equivalent.

function convertBinary(binString) {
	return num.split('').reverse().reduce(function(x, y, i) {
		return y === '1' ? x + Math.pow(2, i) : x;
	}, 0);
}
