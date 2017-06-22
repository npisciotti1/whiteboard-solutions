
function orderWeight(str) {
  var splitStr = str.split('');
  var objArr = [];

  function countWeight(num) {
    let split = num.toString().split('');
    return split.reduce( (acc, val) => acc += val);
  }

  for(var i = 0; i < splitStr.length; i++) {
    objArr.push({
      val: splitStr[i],
      weight: countWeight(splitStr[i])
    });
  }
}
