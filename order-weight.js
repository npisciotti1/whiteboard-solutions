/*Create a function that accepts a string of integers and returns the same string reordered such that they are sorted by 'weight.' For example, the number 20 would have a weight of 2. The number 13 would have a weight of 4. Numbers with equal weight must be returned based on which would come first alpha-numerically - '45' comes before '54', '101' comes before '200'.

input: '100 10 31 13 9 200 2'
output: '10 100 2 200 13 31 9'

*/

function orderWeight(str) {
  return str
    .split(' ')
    .map( value => {
      return {
        val: value,
        weight: value.split('').reduce((acc, curr) => {
          return parseInt(acc) + parseInt(curr);
        }, 0)
      }
    })
    .sort((a, b) => {
      return a.weight == b.weight
      ? a.val.localeCompare(b.val)
      : (a.weight - b.weight)
    })
    .map( obj => obj.val)
    .join(' ');
}
