const add = function(num1, num2) {
  return num1 + num2;	
};

const subtract = function(num1, num2) {
  return num1 - num2;	
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  }

return arr.reduce((zws, num) => zws + num, 0); // 1.Wert = Zwischensumme 2.Wert = atuelles Element letzte wert also die 0 = Startwert 
};

const multiply = function(arr) {
  if (arr.length === 0) {
    return 0;
  }

return arr.reduce((zws, num) => zws * num, 1); 
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);	
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  } 

  let solution = 1;

  for (let i = 1; i <= num; i++) {
    solution *= i;  
  }

  return solution; 
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
