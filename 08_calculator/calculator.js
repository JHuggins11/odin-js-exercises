const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  if (numArray.length === 0) {
    return 0;
  }
  else {
    let total = numArray.reduce((a, b) => a + b);
    return total;
  }
};

const multiply = function(numArray) {
  if (numArray.length === 0) {
    return 0;
  }
  else {
    let total = numArray.reduce((a, b) => a * b);
    return total;
  }
};

const power = function() {
	
};

const factorial = function() {
	
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
