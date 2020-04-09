const events = require('events');

const operationsList = ['add', 'subtract', 'multiply', 'divide'];
if (process.argv.length !== 5) {
  console.log('Function calc require 3 parameter:' +
    '\n 1. Operation name - one of type: "add", "subtract", "multiply", "divide"' +
    '\n 2. Number' +
    '\n 3. Number');
} else if(!operationsList.includes(process.argv[2])) {
  console.log('Please put correct operation name: "add", "subtract", "multiply", "divide"');
} else {
  const args = process.argv.slice(2);
  calc(...args);
}

function calc(operation, arg1, arg2) {
  const numb1 = Number(arg1);
  const numb2 = Number(arg2);
  if (isNaN(numb1) || isNaN(numb2)) {
    console.log('Please enter correct numbers');
    return;
  }

  const eventEmitter = new events.EventEmitter();
  eventEmitter.addListener('add', () => console.log(numb1 + numb2));
  eventEmitter.addListener('subtract', () => console.log(numb1 - numb2));
  eventEmitter.addListener('multiply', () => console.log(numb1 * numb2));
  eventEmitter.addListener('divide', () => console.log(numb1 === 0 ? "0 can't be divided" : numb1 / numb2));

  eventEmitter.emit(operation);
}
