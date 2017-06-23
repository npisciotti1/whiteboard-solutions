function calc(num, operand) {
  return (operand)
  ? operand.call(operand, num)
  : num
}

function zero(operand) { return calc(0, operand)}
function one(operand) { return calc(1, operand)}
function two(operand) { return calc(2, operand)}
function three(operand) { return calc(3, operand)}
function four(operand) { return calc(4, operand)}
function five(operand) { return calc(5, operand)}
function six(operand) { return calc(6, operand)}
function seven(operand) { return calc(7, operand)}
function eight(operand) { return calc(8, operand)}
function nine(operand) { return calc(9, operand)}

function plus(a) {
  return function(b) {
    return b + a;
  }
}

function minus(a) {
  return function(b) {
    return b - a;
  }
}

function times(a) {
  return function(b) {
    return b * a;
  }
}

function dividedBy(a) {
  return function(b) {
    return b / a;
  }
}
