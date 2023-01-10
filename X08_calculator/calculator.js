const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, number) => total * number, 1);
};

const power = function(x, y) {
  let result = 1;
  
  for (let i = 1; i <= y; i++) {
    result *= x;
  }

  return result;
};

const factorial = function(x) {
  let factorial = 1;

  for (let i = x; i >= 1; i--) {
    factorial *= i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
