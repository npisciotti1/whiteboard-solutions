function deleteNth(arr,x){
  var cache = {};
  var result = [];

  for(var i = 0; i < arr.length; i++) {
    if(cache[arr[i]]) {
      cache[arr[i]].push(arr[i]);
    } else cache[arr[i]] = [arr[i]]
  }
  console.log('cache:', cache);

  for(var nums in cache) {
    console.log('nums in for-loop:', nums);
    if (nums.length < x) {
      result.concat(nums);
    }
    else {
      nums = nums.slice(0, x);
      result.concat(nums);
    }
  }
  return result;
}
