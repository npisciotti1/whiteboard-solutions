//This function accepts a binary string and returns it's decimal equivalent.

function convertBinary(binString) {
	var splitStr = binString.split('').reverse();
	var result = 0;

	for (var i = 0; i < splitStr.length; i++) {
		if (splitStr[i] === '1') result += Math.pow(2, i);
	}
	return result;
}
