function eval(operand, num) {
  return (operand)
  ? operand.call(operand, num)
  : num
}

function zero(operand) { return eval(operand, 0)}
function one(operand) { return eval(operand, 1)}
function two(operand) { return eval(operand, 2)}
function three(operand) { return eval(operand, 3)}
function four(operand) { return eval(operand, 4)}
function five(operand) { return eval(operand, 5)}
function six(operand) { return eval(operand, 6)}
function seven(operand) { return eval(operand, 7)}
function eight(operand) { return eval(operand, 8)}
function nine(operand) { return eval(operand, 9)}

function plus(a) {
  return function(b) {
    return a + b;
  }
}

function minus(a) {
  return function(b) {
    return b - a;
  }
}

function times(a) {
  return function(b) {
    return a * b;
  }
}

function dividedBy(a) {
  return function(b) {
    return b / a;
  }
}
