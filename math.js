const sum = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

let obj = {
  sumExp: sum,
  subtractExp: subtract,
};

module.exports = obj;
