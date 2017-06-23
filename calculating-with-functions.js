function calc(operand, num) {
  return (operand)
  ? operand.call(operand, num)
  : num
}

function zero(operand) { return calc(operand, 0)}
function one(operand) { return calc(operand, 1)}
function two(operand) { return calc(operand, 2)}
function three(operand) { return calc(operand, 3)}
function four(operand) { return calc(operand, 4)}
function five(operand) { return calc(operand, 5)}
function six(operand) { return calc(operand, 6)}
function seven(operand) { return calc(operand, 7)}
function eight(operand) { return calc(operand, 8)}
function nine(operand) { return calc(operand, 9)}

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
