
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
      if(a.weight < b.weight) return -1;
      if(a.weight > b.weight) return 1;
      return 0;
    })
    .map( obj => obj.val)
    .join(' ');
}
