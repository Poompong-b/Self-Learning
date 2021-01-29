const _ = require("lodash");

const numbers = [1, 2, 2, 4, 5, 6];

_.each(numbers, (number, i) => {
  console.log(number);
});
