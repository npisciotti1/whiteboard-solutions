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
