const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let sum = 0;
  
  for (const x of arr) {
    sum += x;
  }

  return sum;
};

const multiply = function(arr) {
  let sum = 1;

  for (const x of arr) {
    sum *= x;
  }

  return sum;

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
