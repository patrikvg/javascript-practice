const convertToCelsius = function(fahrenheit) {
  let help = 0;
  help = (fahrenheit - 32) / 1.8;

  let rounded = Math.round(help * 10) / 10;
  return rounded; 
};

const convertToFahrenheit = function(celsius) {
  let help = 0;
  help = (celsius * 1.8) + 32; 
  let rounded = Math.round(help * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
