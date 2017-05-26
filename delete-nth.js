function deleteNth(arr,x){
  var map = {};

  return arr.filter( (num) => {
    map[num] === undefined ? map[num] = 1 : map[num] += 1;
    if(map[num] <= x) return num;
  })
}
