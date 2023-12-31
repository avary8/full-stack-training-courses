const os = require('os');
const path = require('path');


console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))


console.log(path.parse(__filename))

/*--------------Importing our own functions--------------*/
// call each function using dot notation
const math = require('./math')
console.log(math.add(2, 4));
console.log(math.subtract(2, 4));


// call each function by its own name
const {add, subtract, multiply, divide} = require('./math');
console.log(add(1, 2))
console.log(subtract(1, 2))

