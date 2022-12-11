const add = function(a, b) {
  return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(tnArray) {
  const Res = tnArray.reduce((total, number) => {
    if (typeof(number) === 'number') {
      total += number;
    }

    return total;
  }, 0);

  return Res;
};

const multiply = function(tnArray) {
  const Res = tnArray.reduce((total, number) => {
    if (typeof(number) === 'number') {
      total *= number;
    }

    return total;
  }, 1);

  return Res;
};

const power = function(a, b) {
  return (a**b);	
};

const factorial = function(a) {
  if (a > 0) {
    return (a * factorial(a - 1))
  }
  else {
    return 1;
  }
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
