function deleteNth(arr,x){
  var map = {};
  var result = [];

  for(var i = 0; i < arr.length; i++) {
    if(cache[arr[i]]) {
      cache[arr[i]].push(arr[i]);
    } else cache[arr[i]] = [arr[i]]
  }
}
