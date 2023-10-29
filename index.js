const _ = require('lodash');
const numbers = [31,44,566,12,-12,9];



_.each(numbers, function(number, i) {
    console.log(number);
});