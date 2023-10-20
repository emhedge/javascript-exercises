const convertToCelsius = function(temp) {
  // temp in F = (temp - 32) * (5 / 9)C
  temp = (temp - 32) * (5 / 9);
  if (temp % 1 !== 0) {
    return Number(temp.toFixed(1));
  } else return temp;
};

const convertToFahrenheit = function(temp) {
  // temp in C = (temp * (9/5) + 32)F
  temp = (temp * (9 / 5) + 32)
  if (temp % 1 !== 0) {
    return Number(temp.toFixed(1));
  } else return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
