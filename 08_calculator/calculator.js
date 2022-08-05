const add = function(...nums) {
  let total = 0;

  for (const num of nums) {
    total += num;
  }

  return total;
};

const subtract = function(num1, ...nums) {
	let result = num1;

  for (const num of nums) {
    result -= num;
  }

  return result;
};

const sum = function() {
	
};

const multiply = function() {

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
