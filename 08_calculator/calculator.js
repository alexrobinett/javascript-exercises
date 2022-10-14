const add = function(num1 , num2) {
	let result = num1 + num2
  return result
};

const subtract = function(num1, num2) {
	let result = num1 - num2
  return result
};

const sum = function(arr) {
	let result = arr.reduce((p, c) => p + c, 0)
  return result
};

const multiply = function(arr) {
  let result = arr.reduce((p, c) => p * c, 1)
  return result
};

const power = function(num , e) {
	let result = 1
  for (let i = 0; i < e; i++){
    result *= num 
  }
  return result
};

const factorial = function(num) {
	let result = 1
  for (let i = 1; i <= num; i++){
    result = result * i 
  }
  return result
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
