// This function accepts an array of integers and will return the value that occurs
// an odd number of times.

// Input: [1, 2, 4, 2, 4, 3, 1]
// Output: 3

function findOdd(arr) {
    arr = arr.sort();
    var counter = 1;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i + 1] === arr[i]) {
            counter++
            continue;
        }
        //is counter even?
        if(counter % 2 === 0) {
            counter = 1;
            continue;
        }
        return arr[i];
    }
    return false;
}
