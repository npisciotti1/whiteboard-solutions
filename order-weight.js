
function orderWeight(str) {
  var splitStr = str.split(' ');
  var objArr = [];

  function countWeight(num) {
    let split = num.toString().split('');
    return split.reduce( (acc, val) => {
      acc += val;
    });
  }

  for(var i = 0; i < splitStr.length; i++) {
    objArr.push({
      val: splitStr[i],
      weight: countWeight(splitStr[i])
    });
  }

  objArr.sort((a, b) => {
    if(a.weight < b.weight) return -1;
    if(a.weight > b.weight) return 1;
    return 0;
  });
  console.log('objArr', objArr);

  objArr = objArr.map( (el) => {
    return el.val.toString();
  });

  return objArr.join(' ');
}
